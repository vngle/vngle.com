import React from "react";
import Layout from "@components/Layout";
import Seo from "@components/Seo";
import MainPage from "@views/vngleforcities/MainPage";

const VngleForCitiesPage = () => {
  return (
    <Layout>
      <Seo title="Vngle for Cities" />
      <MainPage />
    </Layout>
  );
};

export default VngleForCitiesPage;
