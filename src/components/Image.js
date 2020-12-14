import React from "react";
import { StaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import PropTypes from "prop-types";
import Img from "gatsby-image";

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `StaticQuery`: https://gatsby.dev/staticquery
 */

/**
 * Note: the StaticQuery retrieves all files from image folder and find the exact image to put w/ src
 *       Will need to be deprecated later for performance
 */
const Image = ({ src, alt, bg, height }) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.images.edges.find(n => {
        return n.node.relativePath.includes(src);
      });
      if (!image) {
        return null;
      }

      return (
        <StyledImage
          alt={alt}
          fluid={image.node.childImageSharp.fluid}
          bg={bg}
          height={height}
        />
      );
    }}
  />
);

const StyledImage = styled(Img)`
  ${({ bg, height }) =>
    bg &&
    `
      position: absolute !important;
      top: 0;
      left: 0;
      width: 100%;
      height: ${height || "100%"};
      z-index: -1;
  `}
`;
Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  bg: PropTypes.bool,
  height: PropTypes.string,
};

export default Image;
