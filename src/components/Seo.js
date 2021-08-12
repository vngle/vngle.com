/**
 * SEO component that queries for data with Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import { useLocation } from "@reach/router";

/**
 *
 * @param {string} description Description of page
 * @param {string} lang Language of website
 * @param {object[]} meta Other metadata
 * @param {string} title Title of page
 * @param {string} image Location of site preview image in static folder
 * @param {boolean} article Is this page an article?
 */
function Seo({ description, lang, meta, title, image, article }) {
  const { pathname } = useLocation();
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
            defaultImage: image
            author
            twitterUsername
          }
        }
      }
    `
  );

  const url = `${site.siteMetadata.siteUrl}${pathname}`;
  const metaDescription = description || site.siteMetadata.description;
  const img = `${site.siteMetadata.siteUrl}${
    image || site.siteMetadata.defaultImage
  }`;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:url`,
          content: url,
        },
        {
          property: `og:type`,
          content: `${article ? "article" : "website"}`,
        },
        {
          property: `og:image`,
          content: img,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.twitterUsername,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:image`,
          content: img,
        },
      ].concat(meta)}
    />
  );
}

Seo.defaultProps = {
  title: null,
  image: null,
  article: false,
  lang: `en`,
  meta: [],
  description: ``,
};

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  article: PropTypes.bool,
};

export default Seo;
