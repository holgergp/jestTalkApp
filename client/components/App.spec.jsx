import App from "./App.jsx";
import React from "react";
import renderer from "react-test-renderer";
import * as dependency from "../service/serviceUser.js";

describe("App", () => {
  it("renders", () => {
    const renderedApp = renderer.create(<App />).toJSON();
    expect(renderedApp).toMatchSnapshot();
  });

  it("calling Service correctly", () => {
    dependency.doSomethingWithRemoteData = jest.fn();
    const renderedList = renderer.create(<App />).toJSON();

    expect(dependency.doSomethingWithRemoteData).toHaveBeenCalled();
    expect(dependency.doSomethingWithRemoteData).toBeCalled();

    expect(dependency.doSomethingWithRemoteData.mock.calls[0][0]).toBe("param");
    expect(dependency.doSomethingWithRemoteData).toBeCalledWith("param");
  });

  it("renders with defined data", () => {
    dependency.doSomethingWithRemoteData = jest
      .fn()
      .mockReturnValueOnce(["test"]);

    const renderedApp = renderer.create(<App />).toJSON();
    expect(renderedApp).toMatchSnapshot();
  });

  it("renders with defined return function", () => {
    dependency.doSomethingWithRemoteData = jest
      .fn()
      .mockImplementation(() => ["mockImplementation"]);

    const renderedApp = renderer.create(<App />).toJSON();
    expect(renderedApp).toMatchSnapshot();
  });
});
