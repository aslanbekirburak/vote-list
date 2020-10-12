import React from "react";
import { shallow, mount } from "enzyme";
import App from "./App";
import List from "./pages/List"
import EnterUrl from "./pages/EnterUrl"
import Card from "./components/card"

it("renders without crashing App", () => {
  shallow(<App />);
});

it("renders without crashing List", () => {
  shallow(<List />);
});

it("renders without crashing EnterUrl", () => {
  shallow(<EnterUrl />);
});

const user = {
  vote:5, title:"deneme", link:"deneme", downVote:()=> null, upVote:()=> null, deleteElement:()=> null
};
describe("<Account />", () => {
  it("accepts user account props", () => {
    const wrapper = mount(<Card user={user} />);
    expect(wrapper.props().user).toEqual(user);
  });
});

describe('MyComponent', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Card debug />);
  
    expect(component).toMatchSnapshot();
  });
});

describe('MyCardComponent', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Card debug />);
  
    expect(component).toMatchSnapshot();
  });
});

describe('MyEnterURLComponent', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<EnterUrl debug />);
  
    expect(component).toMatchSnapshot();
  });
});

describe('MyListComponent', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<List debug />);
  
    expect(component).toMatchSnapshot();
  });
});