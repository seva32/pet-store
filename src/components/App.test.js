import React from "react";
import App from "./App";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

it("renders correctly enzyme", () => {
  const wrapper = shallow(<App />);
  expect(toJson(wrapper)).toMatchSnapshot();
}); // We just need to press "w" to activate watch mode then press "u" to update the snapshot.
