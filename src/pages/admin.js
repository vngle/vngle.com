import React from "react";
import { v4 as uuidv4 } from "uuid";
import { withAuthenticator } from "aws-amplify-react";
import Amplify, { Auth, API, graphqlOperation, Storage } from "aws-amplify";
import awsvideoconfig from "../aws-video-exports";
import { createVodAsset, createVideoObject } from "../graphql/mutations";
import "@aws-amplify/ui/dist/style.css";

import SEO from "../components/Seo";
import FilePicker from "../components/FilePicker";
import PopoverProgress from "../components/PopoverProgress";

class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titleVal: "",
      tagsVal: "",
      descVal: "",
      groups: [],
      progress: 0,
    };
    this.submitFormHandler = this.submitFormHandler.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.createAdminPanel = this.createAdminPanel.bind(this);
  }

  componentDidMount() {
    const region = Amplify._config.aws_project_region;
    Auth.currentSession().then(data => {
      const groups = data.idToken.payload["cognito:groups"];
      if (groups) {
        this.setState({ groups: data.idToken.payload["cognito:groups"] });
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
  }

  myCallback = dataFromChild => {
    this.setState({
      file: dataFromChild,
      fileName: dataFromChild.name,
    });
  };

  handleChange(event) {
    const { value } = event.target;
    const { name } = event.target;

    this.setState({
      [name]: value,
    });
  }

  handledescChange(event) {
    this.setState({ descVal: event.target.value });
  }

  submitFormHandler(event) {
    event.preventDefault();
    const uuid = uuidv4();
    const adminPanel = this;
    const videoObject = {
      input: {
        id: uuid,
      },
    };

    API.graphql(graphqlOperation(createVideoObject, videoObject)).then(
      (response, error) => {
        if (error === undefined) {
          const { titleVal, tagsVal, descVal, file, fileName } = this.state;
          const fileExtension = fileName.toLowerCase().split(".");
          const videoAsset = {
            input: {
              title: titleVal,
              caption: descVal,
              tags: tagsVal
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
            file,
            {
              progressCallback(progress) {
                const { loaded, total } = progress;
                console.log(`Uploaded: ${progress.loaded}/${progress.total}`);
                adminPanel.setState({
                  progress: (loaded / total) * 100,
                });
              },
              contentType: "video/*",
            }
          )
            .then(() => console.log(`Successfully Uploaded: ${uuid}`))
            .catch(err => console.log(`Error: ${err}`));
        }
      }
    );
  }

  createAdminPanel() {
    const { groups, titleVal, tagsVal, descVal, progress } = this.state;
    if (groups.includes("Admin")) {
      return (
        <div>
          <header>
            <h1 className="pageName">Admin Panel</h1>
            <form onSubmit={this.submitFormHandler}>
              <div>
                <input
                  type="text"
                  value={titleVal}
                  name="titleVal"
                  placeholder="Title"
                  onChange={this.handleChange}
                />
                <br />
                <input
                  type="text"
                  value={tagsVal}
                  name="tagsVal"
                  placeholder="Tags: College Park, COVID-19, BLM"
                  onChange={this.handleChange}
                />
                <br />
                <textarea
                  className="desTextA"
                  rows="4"
                  cols="50"
                  value={descVal}
                  name="descVal"
                  placeholder="Caption"
                  onChange={this.handleChange}
                />
                <br />
                <FilePicker callbackFromParent={this.myCallback} />
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
      );
    }
    return <div>Not Authenticated</div>;
  }

  render() {
    return (
      <div className="adminHeader">
        <SEO title="Admin Panel" />
        {this.createAdminPanel()}
      </div>
    );
  }
}

export default withAuthenticator(Admin, true);
