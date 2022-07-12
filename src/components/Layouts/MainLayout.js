/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import CookieConsent from "react-cookie-consent";
import Header from "../Header";
import Footer from "../Footer";

/**
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
      render={(data) => (
        <>
          <Header siteTitle={data.site.siteMetadata.title} />
          <CookieConsent
          style={{ background: "black", textShadow: "2px 2px black"}}
          enableDeclineButton flipButtons
          buttonStyle={{
            background: "#ffffff",
    color: "black",
  }}

  declineButtonStyle ={{
    background: "#B0ADAC",
color: "black",
}}
      location="bottom"
          buttonText="I accept" 
          declineButtonText="Decline"
          cookieName="gatsby-gdpr-google-analytics">
          We use cookies to personalise content and ads, to provide social media features and to analyse our traffic. 
          We also share information about your use of our site with our social media, advertising and analytics partners who may combine it with other information that you’ve provided to them or that they've collected from your use of their services.
          You consent to our cookies if you continue to use our website.
          </CookieConsent>
          <main>{children}</main>
          <Footer />
        </>
      )}
    />
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
