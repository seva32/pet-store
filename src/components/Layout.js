import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Header, Container, Divider, Icon } from "semantic-ui-react";

import { pullRight, h1, containerCustom } from "./layout.css";

const Layout = ({ children, name }) => {
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

Layout.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
};

Layout.defaultProps = {
  name: "Pet Store",
};

export default Layout;
