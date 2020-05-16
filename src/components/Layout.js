import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Header, Container, Divider, Icon } from "semantic-ui-react";

import { pullRight, h1, containerCustom } from "./layout.css";

const Layout = ({ children }) => {
  const [name, setName] = useState("react-webpack");
  function handleClick() {
    setName("react-boilerplate-hmr");
  }
  return (
    <Container className={containerCustom}>
      <Link to="/">
        <Header as="h1" className={h1}>
          {name}
        </Header>
      </Link>
      {children}
      <Divider />
      <p className={pullRight}>PetStore Inc. 2020</p>
    </Container>
  );
};

export default Layout;
