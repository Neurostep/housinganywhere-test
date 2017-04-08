import React from 'react';
import { shallow } from 'enzyme';
import { Step2 } from './Step2';

function setup(step1 = []) {
  const props = {
    actions: {
      set: jest.fn(),
    },
    Steps: {
      step1,
    },
  };

  const wrapper = shallow(<Step2 {...props} />);
  return {
    props,
    wrapper,
  };
}

describe('Step2 componenet', () => {
  it('should render to null', () => {
    const { wrapper } = setup();
    expect(wrapper.find('Radio')).toHaveLength(0);
  });
  it('should render self and components', () => {
    const { wrapper } = setup(['A1']);
    expect(wrapper.find('FormGroup')).toHaveLength(1);
    const radios = wrapper.find('Radio');
    const firstRadioProps = radios.at(0).props();
    const secondRadioProps = radios.at(1).props();
    expect(firstRadioProps.name).toBe('b');
    expect(firstRadioProps.value).toBe('B1');
    expect(firstRadioProps.inline).toBe(true);
    expect(secondRadioProps.name).toBe('b');
    expect(secondRadioProps.value).toBe('B2');
    expect(secondRadioProps.inline).toBe(true);
  });
  it('should handle changes', () => {
    const { props, wrapper } = setup(['A1']);
    const radio = wrapper.find('Radio').at(0);
    radio.props().onChange({ target: { checked: false, value: 'B1' } });
    expect(props.actions.set.mock.calls.length).toBe(0);
    radio.props().onChange({ target: { checked: true, value: 'B1' } });
    expect(props.actions.set.mock.calls.length).toBe(1);
    expect(props.actions.set).toBeCalledWith('B1');
  });
});
