import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import { withAuthenticator } from "aws-amplify-react";
import Amplify, { Auth, API, graphqlOperation, Storage } from "aws-amplify";
import awsvideoconfig from "../aws-video-exports";
import { createVodAsset, createVideoObject } from "../graphql/mutations";
import "@aws-amplify/ui/dist/style.css";

import Layout from "../components/Layout";
import SEO from "../components/Seo";
import FilePicker from "../components/FilePicker";
import PopoverProgress from "../components/PopoverProgress";

const Admin = () => {
  const [form, setForm] = useState({
    title: "",
    tags: "",
    caption: "",
  });
  const [file, setFile] = useState({});
  const [groups, setGroups] = useState([]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const region = Amplify._config.aws_project_region;

    Auth.currentSession().then(data => {
      const groups = data.idToken.payload["cognito:groups"];

      if (groups) {
        setGroups(data.idToken.payload["cognito:groups"]);
      }
    });

    Storage.configure({
      AWSS3: {
        bucket: awsvideoconfig.awsInputVideo,
        region,
        customPrefix: {
          public: "",
        },
      },
    });
  }, [groups]);

  const myCallback = dataFromChild => {
    setFile({
      data: dataFromChild,
      name: dataFromChild.name,
    });
  };

  const handleChange = event => {
    const { value } = event.target;
    const { name } = event.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const submitFormHandler = event => {
    event.preventDefault();

    const uuid = uuidv4();
    const videoObject = {
      input: {
        id: uuid,
      },
    };

    API.graphql(graphqlOperation(createVideoObject, videoObject)).then(
      (response, error) => {
        if (error === undefined) {
          const fileExtension = file.name.toLowerCase().split(".");
          const videoAsset = {
            input: {
              type: "Story",
              title: form.title,
              caption: form.caption,
              tags: form.tags
                .trim()
                .replace(/,\s+/g, ",")
                .replace(/\s+/g, "")
                .toLowerCase()
                .split(","),
              vodAssetVideoId: uuid,
            },
          };

          API.graphql(graphqlOperation(createVodAsset, videoAsset));
          Storage.put(
            `${uuid}.${fileExtension[fileExtension.length - 1]}`,
            file.data,
            {
              progressCallback: progress => {
                const { loaded, total } = progress;
                console.log(`Uploaded: ${progress.loaded}/${progress.total}`);
                setProgress((loaded / total) * 100);
              },
              contentType: "video/*",
            }
          )
            .then(() => console.log(`Successfully Uploaded: ${uuid}`))
            .catch(err => console.log(`Error: ${err}`));
        }
      }
    );
  };

  const createAdminPanel = () => {
    return groups.includes("Admin") ? (
      <div>
        <header>
          <h1 className="pageName">Admin Panel</h1>
          <form onSubmit={submitFormHandler}>
            <div>
              <input
                type="text"
                value={form.title}
                name="title"
                placeholder="Title"
                onChange={handleChange}
              />
              <br />
              <input
                type="text"
                value={form.tags}
                name="tags"
                placeholder="Tags: College Park, COVID-19, BLM"
                onChange={handleChange}
              />
              <br />
              <textarea
                className="desTextA"
                rows="4"
                cols="50"
                value={form.caption}
                name="caption"
                placeholder="Caption"
                onChange={handleChange}
              />
              <br />
              <FilePicker callbackFromParent={myCallback} />
              <br />
              <label htmlFor="submitButton" className="submitLabel">
                Create Asset
                <input
                  type="submit"
                  className="submitButton"
                  id="submitButton"
                  value="Create Asset"
                />
              </label>
              <PopoverProgress progress={progress} />
            </div>
          </form>
        </header>
      </div>
    ) : (
      <div>Not Authenticated</div>
    );
  };

  return (
    <Layout>
      <SEO title="Admin Panel" />
      <Container>{createAdminPanel()}</Container>
    </Layout>
  );
};

export default withAuthenticator(Admin, true);
