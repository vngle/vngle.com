import React, { useState, useEffect } from "react";
import { Container, Form, Col, Button } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import { withAuthenticator } from "@aws-amplify/ui-react";
import Amplify, { Auth, API, graphqlOperation, Storage } from "aws-amplify";
import awsvideoconfig from "../aws-video-exports";
import { createVodAsset, createVideoObject } from "../graphql/mutations";
import "@aws-amplify/ui/dist/style.css";

import Layout from "../components/Layouts/MainLayout";
import Seo from "../components/Seo";
import FilePicker from "../components/FilePickers/VideoPicker";
import ProgressModal from "../components/Modals/ProgressModal";

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

    Auth.currentSession().then((data) => {
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
  }, []);

  const handleChange = (event) => {
    const { value } = event.target;
    const { name } = event.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const uuid = uuidv4();
    const videoObject = {
      input: {
        id: uuid,
      },
    };

    // don't do anything if no file is chosen
    // this should be validated before submit in the future

    if (file.data === undefined) {
      console.error("No file chosen");

      return;
    }

    const fileExtension = file.name.toLowerCase().split(".");

    Storage.put(
      `${uuid}.${fileExtension[fileExtension.length - 1]}`,
      file.data,
      {
        progressCallback: (progress) => {
          const { loaded, total } = progress;
          console.log(`Uploaded: ${progress.loaded}/${progress.total}`);
          setProgress((loaded / total) * 100);
        },
        contentType: "video/*",
      }
    )
      .then(() => console.log(`Successfully Uploaded: ${uuid}`))
      .catch((err) => console.log(`Error: ${err}`));

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
              progressCallback: (progress) => {
                const { loaded, total } = progress;
                console.log(`Uploaded: ${progress.loaded}/${progress.total}`);
                setProgress((loaded / total) * 100);
              },
              contentType: "video/*",
            }
          )
            .then(() => console.log(`Successfully Uploaded: ${uuid}`))
            .catch((err) => console.log(`Error: ${err}`));
        }
      }
    );
  };

  return (
    <Layout>
      <Seo title="Admin Panel" />
      <Container>
        {groups.includes("Admin") ? (
          <>
            <h1>Admin Panel</h1>
            <Form onSubmit={handleSubmit}>
              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type="text"
                    value={form.title}
                    name="title"
                    placeholder="Title"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>Tags</Form.Label>
                  <Form.Control
                    type="text"
                    value={form.tags}
                    name="tags"
                    placeholder="Tags: College Park, COVID-19, BLM"
                    onChange={handleChange}
                  />
                </Form.Group>
              </Form.Row>
              <Form.Group>
                <Form.Label>Caption</Form.Label>
                <Form.Control
                  as="textarea"
                  value={form.caption}
                  name="caption"
                  placeholder="Caption"
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group>
                <FilePicker
                  onPick={(pickedFile) => {
                    setFile({
                      data: pickedFile,
                      name: pickedFile.name,
                    });
                  }}
                />
              </Form.Group>
              <Button type="submit">Create Story Video</Button>
            </Form>
            <ProgressModal progress={progress} />
          </>
        ) : (
          <>Not Authenticated</>
        )}
      </Container>
    </Layout>
  );
};

export default withAuthenticator(Admin, true);
