import React, { useState } from "react";
//import { List } from "semantic-ui-react";
import { useAppContext } from "../context/AppProvider";
import * as Styles from "./Features.styles";
export function Bar() {
  return (
    <div>
      <div className="in-bar">soy Bar</div>
    </div>
  );
}
export function Foo() {
  return (
    <div className="in-foo">
      <Bar />
    </div>
  );
}

export function handleTest(cb) {
  cb();
  return "tested!";
}

const Features = () => {
  const [text, setText] = useState("Initial para");
  //const list = ["Dogs", "Cats", "Elms", "Lions"];
  const appContext = useAppContext();
  const name = appContext.appData.name;

  const handleOnClick = (text) => {
    setText("Un carajo");
  };

  return (
    <Styles.StyledContainer>
      {/* <List data-ref="list">
        {list.map((item, idx) => (
          <List.Item key={idx} data-ref="listItem" className="list-item">
            <List.Icon name="checkmark" />
            <List.Content>
              <span dangerouslySetInnerHTML={{ __html: item }} />
            </List.Content>
          </List.Item>
        ))}
      </List> */}
      <ul>
        <li className="item">Cho</li>
        <li className="item every">3</li>
        <li className="item">{name}</li>
      </ul>
      <p onClick={() => handleOnClick("hi")}>{text}</p>
      <Foo />
    </Styles.StyledContainer>
  );
};

export default Features;
