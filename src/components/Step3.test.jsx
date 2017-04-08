import React from 'react';
import { shallow } from 'enzyme';
import { Step3 } from './Step3';

function setup(step2 = '') {
  const props = {
    actions: {
      setText: jest.fn(() => new Promise(resolve => resolve('test'))),
    },
    Steps: {
      step2,
    },
  };

  const wrapper = shallow(<Step3 {...props} />);
  return {
    props,
    wrapper,
  };
}

describe('Step3 componenet', () => {
  it('should render to null', () => {
    const { wrapper } = setup();
    expect(wrapper.find('FormGroup')).toHaveLength(0);
  });
  it('should render self and components', () => {
    const { wrapper } = setup('B1');
    expect(wrapper.find('FormGroup')).toHaveLength(1);
    const textProps = wrapper.find('FormControl').props();
    expect(textProps.type).toBe('text');
    expect(textProps.name).toBe('text');
    expect(textProps.placeholder).toBe('Enter text');
    const btnProps = wrapper.find('Button').props();
    expect(btnProps.disabled).toBe(false);
    expect(btnProps.type).toBe('button');
    expect(wrapper.find('Button').html()).toBe('<button type="button" class="btn btn-default">Check</button>');
  });
  it('should handle state changes', () => {
    const { props, wrapper } = setup('B1');
    wrapper.setState({ submitting: true });
    const btn = wrapper.find('Button');
    expect(btn.prop('disabled')).toBe(true);
    expect(wrapper.find('Button').html()).toBe('<button disabled="" type="button" class="btn btn-default">Checking...</button>');
    expect(wrapper.find('Alert')).toHaveLength(0);
    wrapper.setState({ submitting: false, error: new Error('text') });
    expect(wrapper.find('Button').html()).toBe('<button type="button" class="btn btn-default">Check</button>');
    const alrt = wrapper.find('Alert');
    expect(alrt).toHaveLength(1);
    expect(alrt.prop('bsStyle')).toBe('danger');
    expect(alrt.html()).toBe('<div role="alert" class="alert-badge alert alert-danger">text</div>');
    wrapper.instance().input = { value: '@aaa' };
    btn.props().onClick();
    expect(props.actions.setText.mock.calls.length).toBe(1);
  });
});
