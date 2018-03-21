import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import List from "./ListComponent.jsx";

describe("ListComponent", () => {
  it("shallow renders", () => {
    const testArray = ["1", "2"];
    const renderer = new ShallowRenderer();
    const rendered = renderer.render(<List values={testArray} />);
    const shallowRendered = renderer.getRenderOutput();
    expect(shallowRendered).toMatchSnapshot();
  });
});
