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

const Layout = ({ children }) => {
  const createTheme = props => {
    const styles = getComputedStyle(document.documentElement)

    return {
      // TODO: need to automate this more
      colors: {
        primary: styles.getPropertyValue("--primary"),
        secondary: styles.getPropertyValue("--secondary"),
        light: styles.getPropertyValue("--light"),
        dark: styles.getPropertyValue("--dark"),
        success: styles.getPropertyValue("--success"),
        danger: styles.getPropertyValue("--danger"),
      },
      ...props,
    }
  }

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
          <ThemeProvider theme={() => createTheme()}>
            <Header siteTitle={data.site.siteMetadata.title} />
            <main>{children}</main>
            <Footer />
          </ThemeProvider>
        </>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
