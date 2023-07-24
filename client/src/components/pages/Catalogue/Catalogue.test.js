import React from "react";
import { shallow } from "enzyme";
import Catalogue from "./Catalogue";

describe("Catalogue", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Catalogue />);
    expect(wrapper).toMatchSnapshot();
  });
});
