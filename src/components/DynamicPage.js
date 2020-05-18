import React from "react";
import { Header } from "semantic-ui-react";

import Layout from "./Layout";

const DynamicPage = () => {
  return (
    <Layout name={"<< Pet Store"}>
      <Header as="h2">Dynamic Page</Header>
      <p>This page was loaded asynchronously!!!</p>
    </Layout>
  );
};

export default DynamicPage;
