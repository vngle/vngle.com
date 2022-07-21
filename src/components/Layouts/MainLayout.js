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
            style={{ background: "black", textShadow: "2rem 2rem black" }}
            enableDeclineButton
            flipButtons
            buttonStyle={{
              background: "#ffffff",
              color: "black",
            }}
            declineButtonStyle={{
              background: "#B0ADAC",
              color: "black",
            }}
            location="bottom"
            buttonText="I accept"
            declineButtonText="Decline"
            cookieName="gatsby-gdpr-google-analytics"
            sameSite="none"
          >
            This site uses cookies and related technologies, as described in our{" "}
            <a
              aria-label="learn more about cookies"
              role="button"
              tabindex="0"
              class="cc-link"
              href="https://www.vngle.com/privacy"
              rel="noopener noreferrer nofollow"
              target="_blank"
            >
              privacy
            </a>{" "}
            , for purposes that may include site operation, analytics, enhanced
            user experience, or advertising. You consent to our cookies if you
            continue to use our website. However, if you do not accept cookies,
            you may not be able to use some portions of our services.
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
