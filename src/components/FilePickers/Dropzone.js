/**
 * File drag and drop zone for media file upload
 */

import React, { useEffect } from "react";
import { useDropzone } from "react-dropzone";
import styled from "styled-components";

const Dropzone = ({ files, setFiles }) => {
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    accept: "audio/*, image/*, video/*",
    onDrop: acceptedFiles => {
      setFiles([
        ...files,
        ...acceptedFiles.map(file =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        ),
      ]);
    },
  });

  // const thumbs = files.map(file => (
  //   <Thumb key={file.name}>
  //     <div className="thumb-inner">
  //       <img src={file.preview} alt="media content" />
  //     </div>
  //   </Thumb>
  // ))

  const fileList = files.map(file => <li key={file.path}>{file.path}</li>);

  useEffect(
    () => () => {
      // Make sure to revoke the data URIs to avoid memory leaks
      files.forEach(file => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  return (
    <>
      <Container
        {...getRootProps({ isDragActive, isDragAccept, isDragReject })}
      >
        <input {...getInputProps({ multiple: true })} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </Container>
      <ThumbsContainer>
        {files.length !== 0 && <p>Files</p>}
        <ul>{fileList}</ul>
      </ThumbsContainer>
    </>
  );
};

const getColor = props => {
  if (props.isDragAccept) {
    return "var(--bs-success)";
  }
  if (props.isDragReject) {
    return "var(--bs-danger)";
  }
  if (props.isDragActive) {
    return "var(--bs-primary)";
  }
  return "#eeeeee";
};

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-width: 2px;
  border-radius: 2px;
  border-color: ${props => getColor(props)};
  border-style: dashed;
  background-color: #fafafa;
  color: #bdbdbd;
  outline: none;
  transition: border 0.24s ease-in-out;
`;

const ThumbsContainer = styled.aside`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 16px;
`;

// const Thumb = styled.div`
//   display: "inline-flex";
//   border-radius: 2px;
//   border: 1px solid #eaeaea;
//   margin-bottom: 8px;
//   margin-right: 8px;
//   width: 100px;
//   height: 100px;
//   padding: 4px;
//   box-sizing: border-box;

//   .thumb-inner {
//     display: flex;
//     min-width: 0;
//     overflow: hidden;

//     img {
//       display: block;
//       width: 100%;
//       height: 100%;
//     }
//   }
// `

export default Dropzone;
