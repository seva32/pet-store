import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import dogImage from "./assets/dog.jpg";

const Profile = () => {
  return (
    <Card>
      <Card.Content>
        <Image
          size="mini"
          floated="right"
          shape="circular"
          bordered
          src={dogImage}
        />
      </Card.Content>
      <Card.Content extra>
        <a href="#">
          <Icon name="twitter" />
          Twitter
        </a>{" "}
        <a href="#">
          <Icon name="github" />
          GitHub
        </a>
      </Card.Content>
    </Card>
  );
};

export default Profile;
