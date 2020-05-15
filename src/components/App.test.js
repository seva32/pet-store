import React from "react";
import App from "./App";
//import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
import { shallow } from "enzyme";

it("renders correctly enzyme", () => {
  const wrapper = shallow(<App />);
  expect(toJson(wrapper)).toMatchSnapshot();
}); // We just need to press "w" to activate watch mode then press "u" to update the snapshot.
