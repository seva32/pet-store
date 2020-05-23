import React, { useState, useReducer } from "react";
import { useAppContext } from "../context/AppProvider";
import * as Styles from "./Features.styles";
import * as ACTIONS from "../store/actions";
import * as Reducer from "../store/reducers";

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

  const appContext = useAppContext();
  const name = appContext.appData.name;

  const [reducerState, dispatch] = useReducer(
    Reducer.Reducer1,
    Reducer.initialState
  );
  const dispatchActionSuccess = () => {
    dispatch(ACTIONS.SUCCESS);
  };
  const dispatchActionFailure = () => {
    dispatch(ACTIONS.FAILURE);
  };

  const handleOnClick = () => {
    setText("Un carajo");
  };

  return (
    <Styles.StyledContainer>
      <ul>
        <li className="item">Cho</li>
        <li className="item every">3</li>
        <li className="item">{name}</li>
      </ul>
      <p onClick={() => handleOnClick()}>{text}</p>
      <Foo />
      <div>
        {reducerState.stateprop1 ? (
          <p>stateprop1 is true</p>
        ) : (
          <p>stateprop1 is false</p>
        )}
      </div>
      <button onClick={dispatchActionSuccess}>Dispatch Success</button>
    </Styles.StyledContainer>
  );
};

export default Features;
