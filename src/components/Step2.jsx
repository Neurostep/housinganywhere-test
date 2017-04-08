import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { FormGroup, Radio } from 'react-bootstrap';
import set from '../actions/step2';

export class Step2 extends Component {
  constructor(props) {
    super(props);
    this.onItemChange = this.onItemChange.bind(this);
  }
  onItemChange(e) {
    const el = e.target;
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

Step2.propTypes = {
  actions: React.PropTypes.shape({
    set: React.PropTypes.func.isRequired,
  }).isRequired,
  Steps: React.PropTypes.shape({
    step1: React.PropTypes.array.isRequired,
  }).isRequired,
};

function mapStateToProps(state) {
  return {
    Steps: state.Steps,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ set }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Step2);
