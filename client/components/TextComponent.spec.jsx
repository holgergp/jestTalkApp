import React from "react";
import Text from "./TextComponent";
import renderer from "react-test-renderer";

describe("TextComponent", () => {
  it("renders", () => {
    const renderedApp = renderer.create(<Text value="test" />).toJSON();
    expect(renderedApp).toMatchSnapshot();
  });
});
