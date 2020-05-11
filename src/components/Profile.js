import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

const Profile = () => {
  return (
    <Card>
      <Card.Content>
        <Image
          size="mini"
          floated="right"
          shape="circular"
          bordered
          src="data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUA
    AAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO
        9TXL0Y4OHwAAAABJRU5ErkJggg=="
        />
        <Card.Header>Owner</Card.Header>
        <Card.Description>Taking care of all kind of pets.</Card.Description>
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
