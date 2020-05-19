import React from "react";
import { shallow, mount } from "enzyme";
//import toJson from "enzyme-to-json";
import Features from "./Features";
//import { AppProvider, useAppContext } from "../context/AppProvider";

beforeEach(() => {
  jest.resetModules();
});

jest.mock("../context/AppProvider.js");

describe("Features", () => {
  let wrapper = shallow(<Features />);

  it("should render an ul", () => {
    expect(wrapper.find("ul").length).toEqual(1);
  });

  it("should show a li", () => {
    const expected = (
      <ul>
        <li className="item">Cho</li>
        <li className="item">Nem</li>
        <li className="item">Nemy</li>
      </ul>
    );
    expect(wrapper.contains(expected)).toBe(true);
  });
});

describe("Features context", () => {
  let wrapper;
  it("should accept context", () => {
    wrapper = shallow(<Features />);
    expect(wrapper.find(".item").at(2).find("Nemy")).toBeDefined();
  });
});
