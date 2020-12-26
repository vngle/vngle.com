/**
 * Story report form.
 * Currently allows anyone to upload stories (Contentful entires) to Contentful.
 */

import React, { useState } from "react";
import { Form, Button, Spinner } from "react-bootstrap";
import * as contentful from "contentful-management";

import Dropzone from "./Dropzone";

/**
 *
 * @param {function} setFormSubmitted Set form submission status of parent component
 */
const ReportForm = ({ setFormSubmitted }) => {
  const [form, setForm] = useState({
    title: "",
    author: "",
    email: "",
    caption: "",
    campaign__covid: false, // these campaign booleans shouldn't be hard-coded ideally
    campaign__blm: false,
  });
  const [mediaFiles, setMediaFiles] = useState([]);
  const [sending, setSending] = useState(false);

  const client = contentful.createClient({
    accessToken: process.env.GATSBY_CONTENTFUL_MANAGEMENT_TOKEN,
  });

  // use Contentful Management API to upload to Contentful Space
  const handleSubmit = async event => {
    event.preventDefault();
    setSending(true);

    const space = await client.getSpace(process.env.GATSBY_CONTENTFUL_SPACE_ID);
    const environment = await space.getEnvironment("master");

    // wait for mediaAssets to upload before proceeding
    const mediaAssets = await Promise.all(
      mediaFiles.map(async mediaFile => {
        let newAsset = await environment.createAssetFromFiles({
          fields: {
            title: {
              "en-US": mediaFile.name,
            },
            file: {
              "en-US": {
                contentType: mediaFile.type,
                fileName: mediaFile.name,
                file: mediaFile,
              },
            },
          },
        });

        newAsset = await newAsset.processForAllLocales();

        return {
          sys: {
            type: "Link",
            linkType: "Asset",
            id: newAsset.sys.id,
          },
        };
      })
    );

    environment
      .createEntry("story", {
        fields: {
          title: {
            "en-US": form.title,
          },
          author: {
            "en-US": form.author,
          },
          email: {
            "en-US": form.email,
          },

          caption: {
            "en-US": form.caption,
          },
          mediaContent: {
            "en-US": mediaAssets,
          },
        },
      })
      .then(() => setFormSubmitted(true));
  };

  const handleChange = event => {
    const name = event.target.name;
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;

    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter title"
          onChange={handleChange}
          name="title"
          value={form.title}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Author</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter author"
          onChange={handleChange}
          name="author"
          value={form.auhor}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email address"
          onChange={handleChange}
          name="email"
          value={form.email}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Content Upload</Form.Label>
        <Dropzone files={mediaFiles} setFiles={setMediaFiles} />
      </Form.Group>
      <Form.Group>
        <Form.Label>Caption</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter caption"
          onChange={handleChange}
          name="caption"
          value={form.caption}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>
          Click one of the following if it a popular topic
        </Form.Label>
        <Form.Group>
          <Form.Check
            type="checkbox"
            id="campaign-covid"
            label="COVID-19"
            name="campaign__covid"
            checked={form.campaign__covid}
            onChange={handleChange}
            inline
            custom
          />
          <Form.Check
            type="checkbox"
            id="campaign-blm"
            label="Black Lives Matter"
            inline
            custom
            onChange={handleChange}
            name="campaign__blm"
            checked={form.campaign__blm}
          />
        </Form.Group>
      </Form.Group>

      <Button variant="primary" type="submit">
        {sending ? <Spinner animation="border" size="sm" /> : "Submit"}
      </Button>
    </Form>
  );
};

export default ReportForm;
