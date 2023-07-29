import React from "react";
import { shallow } from "enzyme";
import ResetPasswordForm from "./ResetPasswordForm";

describe("ResetPasswordForm", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ResetPasswordForm />);
    expect(wrapper).toMatchSnapshot();
  });
});
