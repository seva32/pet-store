import React from "react";
import { shallow, mount } from "enzyme";
import Features, { Foo, Bar } from "./Features";
import { appData } from "../context/__mocks__/AppProvider";
import { stub } from "sinon";

beforeEach(() => {
  jest.resetModules();
});

jest.mock("../context/AppProvider.js");
let name = appData.name; // context value

let mockHandleOnClick = jest.fn();
let text = "Initial para";
let ulVar = (
  <ul>
    <li className="item">Cho</li>
    <li className="item every">3</li>
    <li className="item">{name}</li>
  </ul>
);

let elVar = (
  <>
    {ulVar}
    <p onClick={() => {}}>{text}</p>
    <Foo />
  </>
);

describe("Features", () => {
  let wrapper = shallow(<Features />);

  it("should render an ul", () => {
    expect(wrapper.find("ul").length).toEqual(1);
  });

  it("should show a list", () => {
    const expected = ulVar;
    expect(wrapper.contains(expected)).toBe(true);
  });

  it("should dive to Foo and Bar", () => {
    expect(wrapper.find(".in-foo").length).toEqual(0);
    expect(wrapper.find("Foo").length).toEqual(1);
    expect(wrapper.find("Foo").dive().find(".in-foo").length).toEqual(1);
    expect(wrapper.find("Foo").dive().find("Bar").length).toEqual(1);
    expect(
      wrapper.find("Foo").dive().find("Bar").dive().find(".in-bar").length
    ).toEqual(1);
    expect(
      wrapper.find("Foo").dive().find("Bar").dive().find(".in-bar").text()
    ).toEqual("soy Bar");
  });

  it("test equals/getElement/contains (Foo and jsx)", () => {
    // react comp
    expect(wrapper.find("Foo").equals(<Foo />)).toBe(true);
    // jsx expresion
    //expect(wrapper.equals(elVar)).toBe(true);
    //expect(wrapper.getElement()).toEqual(elVar);
    expect(wrapper.find(".item").getElements().length).toBe(3);
    expect(
      wrapper.containsAllMatchingElements([<Foo />, ulVar, <p>{text}</p>])
    ).toBe(true);
  });

  it("shoul test every api", () => {
    expect(wrapper.find(".item").every(".item")).toEqual(true);
    expect(wrapper.find(".every").length).toEqual(1);
    expect(wrapper.find(".item").every(".every")).toEqual(false);
  });

  it("shoul test everyWhere api", () => {
    expect(
      wrapper.find(".item").everyWhere((node) => node.hasClass("item"))
    ).toEqual(true);
    expect(
      wrapper.find(".item").everyWhere((node) => node.hasClass("every"))
    ).toEqual(false);
  });

  it("shoul test exists api", () => {
    expect(wrapper.exists()).toEqual(true);
    expect(wrapper.exists(".every")).toEqual(true);
    expect(wrapper.exists(".test")).toEqual(false);
  });

  it("shoul test filter/filterWhere/forEach api", () => {
    expect(wrapper.find(".item").filter(".item").length).toEqual(3);
    expect(wrapper.find(".item").filter(".every").length).toEqual(1);
    const items = wrapper
      .find(".item")
      .filterWhere((n) => typeof n.type() === "string");
    expect(items.length).toEqual(3);
    expect(
      wrapper.find(".item").forEach((node) => {
        expect(node.hasClass("item")).toEqual(true);
        expect(typeof node.type() === "string").toBe(true);
      })
    );
  });

  it("should test hostNodes api", () => {
    expect(wrapper.find("ul").hostNodes().length).toEqual(1);
    expect(wrapper.find(".item").hostNodes().length).toEqual(3);
    expect(wrapper.find("Foo").hostNodes().length).toBeFalsy();
  });

  it("tests invoke", () => {
    let pEl = wrapper.find("p");
    expect(pEl.text()).toEqual("Initial para");
    wrapper.find("p").invoke("onClick")();
    pEl = wrapper.find("p");
    expect(pEl.text()).toEqual("Un carajo");
  });

  it("tests matcheselement", () => {
    expect(wrapper.find("ul").matchesElement(ulVar)).toBe(true);
    expect(
      wrapper
        .find(".item")
        .at(1)
        .matchesElement(<li>3</li>)
    ).toBe(true);
  });

  it("tests not api", () => {
    expect(wrapper.find(".item").not(".every").length).toEqual(2);
  });

  it("tests parent/parents api", () => {
    expect(wrapper.find(".every").parent().name()).toEqual("ul");
    expect(wrapper.find(".every").parent().is("ul")).toEqual(true);
    expect(wrapper.find(".every").parents().length).toEqual(2); // debug muestra todo incluido every
  });

  it("tests render api", () => {
    // expect(wrapper.find("Foo").render().find(".in-foo").length).toEqual(1);
    // console.log(wrapper.find(Foo).dive().find(Bar).debug());
  });
});

describe("Features context", () => {
  let wrapper;
  it("should accept context", () => {
    wrapper = shallow(<Features />);
    expect(wrapper.find(".item").at(2).find(name)).toBeDefined();
    expect(wrapper.find(".item").at(2).text()).toEqual(name);
  });
});
