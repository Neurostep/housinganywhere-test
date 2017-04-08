import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { FormGroup, FormControl, Button, Alert } from 'react-bootstrap';
import setText from '../actions/step3';
import './Step3.css';

class Step3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      submitting: false,
    };
    this.onButtonClick = this.onButtonClick.bind(this);
  }
  onButtonClick() {
    this.setState({
      submitting: true,
    });
    this.props.actions.setText(this.input.value)
      .then(
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
    if (!this.props.Steps.step2) {
      return null;
    }
    return (
      <FormGroup className="row">
        <div className="col-md-6">
          <FormControl
            inputRef={(e) => { this.input = e; }}
            type="text"
            name="text"
            placeholder="Enter text"
          />
        </div>
        <div className="col-md-2">
          <Button disabled={this.state.submitting} onClick={this.onButtonClick} type="button">
            {this.state.submitting ? 'Checking...' : 'Check'}
          </Button>
        </div>
        <div className="col-md-6">
          {this.state.error &&
            <Alert bsStyle="danger" className="alert-badge">{this.state.error.message}</Alert>}
        </div>
      </FormGroup>
    );
  }
}

Step3.propTypes = {
  actions: React.PropTypes.shape({
    setText: React.PropTypes.func.isRequired,
  }).isRequired,
  Steps: React.PropTypes.shape({
    step2: React.PropTypes.string.isRequired,
  }).isRequired,
};

function mapStateToProps(state) {
  return {
    Steps: state.Steps,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ setText }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Step3);
