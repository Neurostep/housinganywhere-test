import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Step5Actions from '../actions/step5';
import "./Step5.css";
import { FormGroup, Button, Alert } from 'react-bootstrap';

class Step5 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      submitting: false
    };
    this.onButtonClick = this.onButtonClick.bind(this);
  }
  onButtonClick() {
    let { step1, step2, step3, step4 } = this.props.Steps;
    this.setState({
      submitting: true
    });
    this.props.actions.setText({
      a: step1,
      b: step2,
      text: step3,
      c: step4
    }).then(
        () => {
          this.setState({
            submitting: false,
            error: null
          });
        },
        (error) => {
          this.setState({
            submitting: false,
            error
          });
        }
      );
  }
  render() {
    if (!this.props.Steps.step4) {
      return null;
    }
    return (
      <FormGroup>
        <Button disabled={this.state.submitting} onClick={this.onButtonClick}>
          {this.state.submitting ? "Submitting..." : "Submit"}
        </Button>
        {this.state.error && <Alert bsStyle="danger" className="submit-alert-badge">{this.state.error.message}</Alert>}
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
    actions: bindActionCreators(Step5Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Step5);