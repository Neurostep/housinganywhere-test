import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Step1Actions from '../actions/step1';
import { FormGroup, Checkbox } from 'react-bootstrap';

class Step1 extends Component {
  constructor(props) {
    super(props);
    this.onItemChange = this.onItemChange.bind(this);
  }
  onItemChange(e) {
      let el = e.target;
      if (el.checked) {
          this.props.actions.add(el.value);
      } else {
          this.props.actions.del(el.value);
      }
  }
  render() {
    return (
      <FormGroup>
        <Checkbox name="a" value="A1" onChange={this.onItemChange} inline>A1</Checkbox>
        <Checkbox name="a" value="A2" onChange={this.onItemChange} inline>A2</Checkbox>
      </FormGroup>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Step1Actions, dispatch)
  };
}

export default connect(undefined, mapDispatchToProps)(Step1);