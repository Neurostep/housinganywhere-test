import React from 'react';
import { shallow } from 'enzyme';
import { Step1 } from './Step1';

function setup() {
  const props = {
    actions: {
      del: jest.fn(),
      add: jest.fn(),
    },
  };

  const wrapper = shallow(<Step1 {...props} />);
  return {
    props,
    wrapper,
  };
}

describe('Step1 componenet', () => {
  it('should render self and components', () => {
    const { wrapper } = setup();
    expect(wrapper.find('FormGroup')).toHaveLength(1);
    const checkboxes = wrapper.find('Checkbox');
    const firstCheckboxProps = checkboxes.at(0).props();
    const secondCheckboxProps = checkboxes.at(1).props();
    expect(firstCheckboxProps.name).toBe('a');
    expect(firstCheckboxProps.value).toBe('A1');
    expect(firstCheckboxProps.inline).toBe(true);
    expect(secondCheckboxProps.name).toBe('a');
    expect(secondCheckboxProps.value).toBe('A2');
    expect(secondCheckboxProps.inline).toBe(true);
  });
  it('should handle changes', () => {
    const { props, wrapper } = setup();
    const checkbox = wrapper.find('Checkbox').at(0);
    checkbox.props().onChange({ target: { checked: true, value: 'A1' } });
    expect(props.actions.add.mock.calls.length).toBe(1);
    expect(props.actions.add).toBeCalledWith('A1');
    checkbox.props().onChange({ target: { checked: false, value: 'A1' } });
    expect(props.actions.del.mock.calls.length).toBe(1);
    expect(props.actions.del).toBeCalledWith('A1');
  });
});
