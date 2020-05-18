import React from "react";
import App from "./App";
import Home from "./Home";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";
import { MemoryRouter } from "react-router";
import NoMatch from "./NoMatch";
import { act } from "react-dom/test-utils";

describe("<App />", () => {
  it("renders correctly enzyme", () => {
    const wrapper = shallow(<App />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  test("invalid path should redirect to 404", () => {
    var wrapper;
    act(() => {
      return (wrapper = mount(
        <MemoryRouter initialEntries={["/random"]}>
          <App />
        </MemoryRouter>
      ));
    });
    //expect(wrapper.find(Home)).toHaveLength(1);
    expect(wrapper.find(NoMatch)).toHaveLength(1);
  });
});
