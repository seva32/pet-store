import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Header, Container, Divider, Icon } from "semantic-ui-react";

import { pullRight, h1 } from "./layout.css";

const Layout = ({ children }) => {
  const [name, setName] = useState("react-webpack");
  function handleClick() {
    setName("react-boilerplate-hmr");
  }
  return (
    <Container>
      <Link to="/">
        <Header as="h1" className={h1}>
          {name}
          <button className="ui button" onClick={() => handleClick()}>
            change!
          </button>
        </Header>
      </Link>
      {children}
      <Divider />
      <p className={pullRight}>
        Made with <Icon name="heart" color="red" /> by Esau Silva
      </p>
    </Container>
  );
};

export default Layout;
