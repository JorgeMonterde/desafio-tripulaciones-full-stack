import React from "react";
import { shallow } from "enzyme";
import StudyCases from "./StudyCases";

describe("StudyCases", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<StudyCases />);
    expect(wrapper).toMatchSnapshot();
  });
});
