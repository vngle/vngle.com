/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { ThemeProvider } from "styled-components"

import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => (
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
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

// When updating theme, make sure to update variables in _variable.scss too
const theme = {
  colors: {
    primary: "#ffcc35",
    secondary: "#41a9ff",
    light: "#f7f7f7",
    dark: "#1e1c21",
  },
}

export default Layout
