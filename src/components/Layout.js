import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Divider } from "semantic-ui-react";
import * as Styles from "./Layout.styles";

const Layout = ({ children, name }) => {
  return (
    <Styles.StyledContainer>
      <div className="ui secondary  menu">
        <Link to="/">
          <p className="active item">{name}</p>
        </Link>
        <Link to="/dynamic">
          <p className="item">Messages</p>
        </Link>
        <Link to="/">
          <p className="item">Friends</p>
        </Link>{" "}
        <div className="right menu">
          <div className="item">
            <div className="ui icon input">
              <input type="text" placeholder="Search..." />
              <i className="search link icon"></i>
            </div>
          </div>
          <Link to="/">
            <p className="ui item">Signin</p>
          </Link>
          <Link to="/">
            <p className="ui item">Signup</p>
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
