/**
 * Custom React hook that returns the site medata configured in gatsby-config.js
 */

import { useStaticQuery, graphql } from "gatsby";

const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `
  );
  return site.siteMetadata;
};

export default useSiteMetadata;
