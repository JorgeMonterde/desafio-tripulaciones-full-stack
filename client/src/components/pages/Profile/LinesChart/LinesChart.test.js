import React from "react";
import { shallow } from "enzyme";
import LinesChart from "./LinesChart";

describe("Chart", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<LinesChart />);
    expect(wrapper).toMatchSnapshot();
  });
});
