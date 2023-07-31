import React from "react";
import { shallow } from "enzyme";
import TextMarquee from "./TextMarquee";

describe("TextMarquee", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<TextMarquee />);
    expect(wrapper).toMatchSnapshot();
  });
});
