import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Step2Actions from '../actions/step2';
import { FormGroup, Radio } from 'react-bootstrap';

class Step2 extends Component {
  constructor(props) {
    super(props);
    this.onItemChange = this.onItemChange.bind(this);
  }
  onItemChange(e) {
    let el = e.target;
    if (el.checked) {
      this.props.actions.set(el.value);
    }
  }
  render() {
    if (!this.props.Steps.step1.length) {
      return null;
    }
    return (
      <FormGroup>
        <Radio name="b" value="B1" onChange={this.onItemChange} inline>B1</Radio>
        <Radio name="b" value="B2" onChange={this.onItemChange} inline>B2</Radio>
      </FormGroup>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    Steps: state.Steps
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Step2Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Step2);