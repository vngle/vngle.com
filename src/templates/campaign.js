// /**
//  * Template page for Vngle hot topics (formerly called campaigns)
//  */

// import React from "react";
// import { Link, graphql } from "gatsby";
// import { Container, Row, Col, Jumbotron } from "react-bootstrap";
// import styled from "styled-components";
// import VideoThumbnail from "react-video-thumbnail";

// import SEO from "../components/Seo";
// import Layout from "../components/Layout";

// /**
//  *
//  * @param {object} pageContext Data about page passed from createPage() function
//  * @param {object} data Data retrieved by GraphQL query to be used on this page
//  *                      on all stories associated with particular hot topic
//  */
// export default ({
//   pageContext: { title, id, cover, description },
//   data: {
//     allContentfulStory: { nodes: stories },
//   },
// }) => {
//   // Contentful cannot generate video thumbnails. As a workaround, we are using react-video-thumbnail to generate them.
//   // Need to be replaced in the future with a more elegant solution.
//   const createThumbnail = ({ file, fixed }) => {
//     if (file.contentType.startsWith("image")) {
//       return <img alt="story" src={fixed.src} className="shadow" />;
//     } else if (file.contentType.startsWith("video")) {
//       return (
//         <VideoThumbnailContainer>
//           <VideoThumbnail videoUrl={file.url} />
//         </VideoThumbnailContainer>
//       );
//     } else {
//       return <NoThumbnailDiv />;
//     }
//   };

//   return (
//     <Layout>
//       <SEO title={title} />
//       <StyledJumbotron>
//         <img src={cover.fluid.src} alt="Campaign banner" />
//         <Row>
//           <Col xs={12} md={8}>
//             <h1 className="display-3">{title}</h1>
//             <p>{description.description}</p>
//           </Col>
//         </Row>
//       </StyledJumbotron>
//       <Container fluid>
//         {stories === null ? (
//           <h1 className="text-muted text-center">
//             No stories reported at the moment. Come back later!
//           </h1>
//         ) : (
//           <StoryRow>
//             {stories.map(story => {
//               return (
//                 <StoryCol key={story.id} md={"auto"} className="mb-4">
//                   <div className="story-container shadow rounded">
//                     <p>{story.title}</p>

//                     {createThumbnail(story.mediaContent[0])}
//                     <Link
//                       to={`/stories/${story.slug}`}
//                       className="stretched-link"
//                     />
//                   </div>
//                 </StoryCol>
//               );
//             })}
//           </StoryRow>
//         )}
//       </Container>
//     </Layout>
//   );
// };

// export const query = graphql`
//   query Story($id: String) {
//     allContentfulStory(
//       filter: { campaigns: { elemMatch: { id: { eq: $id } } } }
//     ) {
//       nodes {
//         title
//         slug
//         id
//         mediaContent {
//           file {
//             contentType
//             url
//           }
//           fixed {
//             src
//           }
//         }
//       }
//     }
//   }
// `;

// const StyledJumbotron = styled.div`
//   position: relative;
//   background-color: transparent;
//   color: var(--bs-light);
//   background: linear-gradient(
//     180deg,
//     rgba(33, 37, 41, 0) 0%,
//     rgba(33, 37, 41, 0.3) 50%,
//     rgba(33, 37, 41, 0.9) 100%
//   );
//   padding-top: 9rem;
//   padding-bottom: 2rem;

//   img {
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     z-index: -1;
//     object-fit: cover;
//     object-position: center center;
//   }

//   h1 {
//     font-weight: 800;
//   }
// `;

// const StoryRow = styled(Row)`
//   align-items: center;
//   justify-content: center;
// `;

// const StoryCol = styled(Col)`
//   display: flex;
//   align-items: flex-end;
//   justify-content: center;
//   position: relative;
//   text-align: left;
//   color: white;

//   p {
//     position: absolute;
//     bottom: 0;
//     margin-left: 1rem;
//     max-width: 65%;
//     overflow: hidden;
//     text-overflow: ellipsis;
//     display: -webkit-box;
//     -webkit-box-orient: vertical;
//     -webkit-line-clamp: 3;
//   }

//   img {
//     width: 100%;
//     position: relative;
//     z-index: -1;
//   }

//   .story-container {
//     position: relative;
//     background: linear-gradient(
//       180deg,
//       rgba(33, 37, 41, 0) 0%,
//       rgba(33, 37, 41, 0.5) 70%,
//       rgba(33, 37, 41, 0.9) 100%
//     );
//     overflow: hidden;
//   }
// `;

// const VideoThumbnailContainer = styled.div`
//   width: 300px;
// `;

// const NoThumbnailDiv = styled.div`
//   background: var(--bs-primary);
//   width: 300px;
//   height: 300px;
// `;
