import React from "react";
//import { List } from "semantic-ui-react";
import { useAppContext } from "../context/AppProvider";

const Features = () => {
  //const list = ["Dogs", "Cats", "Elms", "Lions"];
  const appContext = useAppContext();
  const name = appContext.appData.name;
  return (
    <>
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
        <li className="item">Nem</li>
        <li className="item">{name}</li>
      </ul>
      <p>some testing paragraph</p>
    </>
  );
};

export default Features;
