import React from 'react';
import { shallow } from 'enzyme';
import { Step4 } from './Step4';

function setup(step3 = '') {
  const props = {
    actions: {
      set: jest.fn(),
    },
    Steps: {
      step3,
    },
  };

  const wrapper = shallow(<Step4 {...props} />);
  return {
    props,
    wrapper,
  };
}

describe('Step4 componenet', () => {
  it('should render to null', () => {
    const { wrapper } = setup();
    expect(wrapper.find('FormGroup')).toHaveLength(0);
  });
  it('should render self and components', () => {
    const { wrapper } = setup('@aaa');
    expect(wrapper.find('FormGroup')).toHaveLength(1);
    const select = wrapper.find('FormControl');
    expect(select.prop('name')).toBe('c');
    expect(select.prop('componentClass')).toBe('select');
    expect(select.prop('placeholder')).toBe('select');
    const options = select.find('option');
    expect(options).toHaveLength(4);
  });
  it('should handle changes', () => {
    const { props, wrapper } = setup('@aaa');
    const select = wrapper.find('FormControl');
    select.props().onChange({ target: { value: 'C1' } });
    expect(props.actions.set.mock.calls.length).toBe(1);
    expect(props.actions.set).toBeCalledWith('C1');
  });
});
