/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import { ThemeProvider } from "styled-components";

import Header from "./Header";
import Footer from "./Footer";

/**
 * Uses ThemeProvider from styled-components to make context available for children
 * to use.
 *
 * @param {element} children Any JSX that are children of Layout component
 */
const Layout = ({ children }) => {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <ThemeProvider theme={theme}>
            <Header siteTitle={data.site.siteMetadata.title} />
            <main>{children}</main>
            <Footer />
          </ThemeProvider>
        </>
      )}
    />
  );
};

// When updating theme, make sure to update variables in _variable.scss too
// TODO: Consider using Bootstrap theme CSS variables instead
const theme = {
  colors: {
    primary: "#ffcc35",
    secondary: "#0419c1",
    light: "#f7f7f7",
    dark: "#1e1c21",
    success: "#28a745",
    danger: "#dc3545",
  },
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
