import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import logo from "../../static/images/logo.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Decentralized grassroots news network for news deserts." />

    <div className={"page-header home"}>
      <img alt="Logo" src={logo}></img>
      <div>
        <h1>Decentralized grassroots news network for news deserts.</h1>
      </div>
      <div>
        <p>Sign up to receive grassroots news coverage</p>
        <input></input>
        <button>Submit</button>
      </div>
    </div>

    <div className={"container"}></div>

    <div className={"call-to-action"}>
      <div className={"container"}>
        <div className={"call-to-action__content"}>
          <h2>Think something needs coverage?</h2>
          <p>Join our movement!</p>
          <div className={"button"}>
            <a href={"https://www.vngle.com/"}>Request Coverage</a>
          </div>
          <p>upload stuff</p>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
