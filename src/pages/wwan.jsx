import React from "react"
import { Container, Jumbotron } from "react-bootstrap"

import Layout from "../components/layout"

export default () => (
  <Layout>
    <Jumbotron className="bg-primary rounded-0" as="section">
      <Container>
        <h1>Where We Are Now</h1>
      </Container>
    </Jumbotron>

    <Container as="article">
      <h2>Under Construction...</h2>
    </Container>
  </Layout>
)
