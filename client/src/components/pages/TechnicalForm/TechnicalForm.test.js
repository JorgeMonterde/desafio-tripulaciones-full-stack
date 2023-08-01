import React from "react";
import { shallow } from "enzyme";
import TechnicalForm from "./TechnicalForm";

describe("TechnicalForm", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<TechnicalForm />);
    expect(wrapper).toMatchSnapshot();
  });
});
