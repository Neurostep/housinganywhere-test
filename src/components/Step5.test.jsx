import React from 'react';
import { shallow } from 'enzyme';
import { Step5 } from './Step5';

function setup(steps = { step1: ['A1'], step2: 'B2', step3: '@aaa', step4: '' }) {
  const props = {
    actions: {
      submit: jest.fn(() => new Promise(resolve => resolve('test'))),
    },
    Steps: steps,
  };

  const wrapper = shallow(<Step5 {...props} />);
  return {
    props,
    wrapper,
  };
}

describe('Step5 componenet', () => {
  it('should render to null', () => {
    const { wrapper } = setup();
    expect(wrapper.find('FormGroup')).toHaveLength(0);
  });
  it('should render self and components', () => {
    const { wrapper } = setup({
      step1: ['A1'],
      step2: 'B1',
      step3: '@aaa',
      step4: 'C1',
    });
    expect(wrapper.find('FormGroup')).toHaveLength(1);
    const btnProps = wrapper.find('Button').props();
    expect(btnProps.disabled).toBe(false);
    expect(btnProps.type).toBe('button');
    expect(wrapper.find('Button').html()).toBe('<button type="button" class="btn btn-default">Submit</button>');
  });
  it('should handle state changes', () => {
    const { props, wrapper } = setup({
      step1: ['A1'],
      step2: 'B1',
      step3: '@aaa',
      step4: 'C1',
    });
    wrapper.setState({ submitting: true });
    const btn = wrapper.find('Button');
    expect(btn.prop('disabled')).toBe(true);
    expect(wrapper.find('Button').html()).toBe('<button type="button" disabled="" class="btn btn-default">Submitting...</button>');
    expect(wrapper.find('Alert')).toHaveLength(0);
    wrapper.setState({ submitting: false, error: new Error('text') });
    expect(wrapper.find('Button').html()).toBe('<button type="button" class="btn btn-default">Submit</button>');
    const alrt = wrapper.find('Alert');
    expect(alrt).toHaveLength(1);
    expect(alrt.prop('bsStyle')).toBe('danger');
    expect(alrt.html()).toBe('<div role="alert" class="submit-alert-badge alert alert-danger">text</div>');
    wrapper.instance().input = { value: '@aaa' };
    btn.props().onClick();
    expect(props.actions.submit.mock.calls.length).toBe(1);
  });
});
