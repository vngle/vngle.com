import React from "react";
import { Container } from "react-bootstrap";
import Layout from "@components/Layout";
import MainPage from "@views/vngleforcities/MainPage";
import Seo from "@components/Seo";

const VngleForCitiesPage = () => {
  return (
    <Layout>
      <Seo title="Vngle for Cities" />
      <Container>
        <MainPage />
      </Container>
    </Layout>
  );
};

export default VngleForCitiesPage;
