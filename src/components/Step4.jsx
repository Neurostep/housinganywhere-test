import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { FormGroup, FormControl } from 'react-bootstrap';
import set from '../actions/step4';

class Step4 extends Component {
  constructor(props) {
    super(props);
    this.onSelectChange = this.onSelectChange.bind(this);
  }
  onSelectChange(e) {
    const el = e.target;
    this.props.actions.set(el.value);
  }
  render() {
    if (!this.props.Steps.step3) {
      return null;
    }
    return (
      <FormGroup className="row">
        <div className="col-md-6">
          <FormControl
            onChange={this.onSelectChange}
            name="c"
            componentClass="select"
            placeholder="select"
          >
            <option />
            <option value="C1">C1</option>
            <option value="C2">C2</option>
            <option value="C3">C3</option>
          </FormControl>
        </div>
      </FormGroup>
    );
  }
}

Step4.propTypes = {
  actions: React.PropTypes.shape({
    set: React.PropTypes.func.isRequired,
  }).isRequired,
  Steps: React.PropTypes.shape({
    step3: React.PropTypes.string.isRequired,
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

export default connect(mapStateToProps, mapDispatchToProps)(Step4);
