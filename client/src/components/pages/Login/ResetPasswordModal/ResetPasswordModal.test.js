import React from "react";
import { shallow } from "enzyme";
import ResetPasswordModal from "./ResetPasswordModal";

describe("ResetPasswordModal", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ResetPasswordModal />);
    expect(wrapper).toMatchSnapshot();
  });
});
