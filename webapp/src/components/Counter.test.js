import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Counter } from './Counter';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {
    count: 0,
    incrementCounter: jest.fn()
  };

  const enzymeWrapper = shallow(<Counter {...props} />);

  return {
    props,
    enzymeWrapper
  };
}

describe('<Counter />', () => {

  it('should call incrementCounter if button clicked', () => {
    const { enzymeWrapper, props } = setup();
    const button = enzymeWrapper.find('button');

    button.simulate('click');

    expect(props.incrementCounter).toHaveBeenCalled();
    expect(props.incrementCounter).toHaveBeenCalledTimes(1);
  });
});