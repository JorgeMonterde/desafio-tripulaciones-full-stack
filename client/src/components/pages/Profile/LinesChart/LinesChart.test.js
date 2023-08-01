<<<<<<< HEAD:client/src/components/pages/News/News.test.js
import React from "react";
import { shallow } from "enzyme";
import News from "./News";

describe("News", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<News />);
    expect(wrapper).toMatchSnapshot();
  });
});
=======
import React from "react";
import { shallow } from "enzyme";
import LinesChart from "./LinesChart";

describe("Chart", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<LinesChart />);
    expect(wrapper).toMatchSnapshot();
  });
});
>>>>>>> 9a2f24fb3eb5f378599c9e0439ed52163d24995c:client/src/components/pages/Profile/LinesChart/LinesChart.test.js
