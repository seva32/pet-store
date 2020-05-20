import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Container, Divider } from "semantic-ui-react";
import * as Styles from "./Layout.styles";

const Layout = ({ children, name }) => {
  return (
    <Styles.StyledContainer>
      <div class="ui secondary  menu">
        <Link to="/">
          <a class="active item">{name}</a>
        </Link>
        <Link to="/dynamic">
          <a class="item">Messages</a>
        </Link>
        <Link to="/">
          <a class="item">Friends</a>
        </Link>{" "}
        <div class="right menu">
          <div class="item">
            <div class="ui icon input">
              <input type="text" placeholder="Search..." />
              <i class="search link icon"></i>
            </div>
          </div>
          <Link to="/">
            <a class="ui item">Signin</a>
          </Link>
          <Link to="/">
            <a class="ui item">Signup</a>
          </Link>
        </div>
      </div>
      {children}
      <Divider />
      <p>PetStore Inc. 2020</p>
    </Styles.StyledContainer>
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
