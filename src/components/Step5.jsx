import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { FormGroup, Button, Alert } from 'react-bootstrap';
import submit from '../actions/step5';
import './Step5.css';

class Step5 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      submitting: false,
    };
    this.onButtonClick = this.onButtonClick.bind(this);
  }
  onButtonClick() {
    const { step1, step2, step3, step4 } = this.props.Steps;
    this.setState({
      submitting: true,
    });
    this.props.actions.submit({
      a: step1,
      b: step2,
      text: step3,
      c: step4,
    }).then(
        () => {
          this.setState({
            submitting: false,
            error: null,
          });
        },
        (error) => {
          this.setState({
            submitting: false,
            error,
          });
        },
      );
  }
  render() {
    if (!this.props.Steps.step4) {
      return null;
    }
    return (
      <FormGroup>
        <Button disabled={this.state.submitting} onClick={this.onButtonClick}>
          {this.state.submitting ? 'Submitting...' : 'Submit'}
        </Button>
        {this.state.error &&
          <Alert bsStyle="danger" className="submit-alert-badge">{this.state.error.message}</Alert>}
      </FormGroup>
    );
  }
}

Step5.propTypes = {
  actions: React.PropTypes.shape({
    submit: React.PropTypes.func.isRequired,
  }).isRequired,
  Steps: React.PropTypes.shape({
    step1: React.PropTypes.array.isRequired,
    step2: React.PropTypes.string.isRequired,
    step3: React.PropTypes.string.isRequired,
    step4: React.PropTypes.string.isRequired,
  }).isRequired,
};

function mapStateToProps(state) {
  return {
    Steps: state.Steps,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ submit }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Step5);
