<<<<<<< HEAD
import React from "react";
import { shallow } from "enzyme";
import Login from "./Login";

describe("Login", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper).toMatchSnapshot();
  });
});
=======
import React from "react";
import { shallow } from "enzyme";
import Login from "./Login";

/* describe("Login", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper).toMatchSnapshot();
  });
});
 */
>>>>>>> 9a2f24fb3eb5f378599c9e0439ed52163d24995c
