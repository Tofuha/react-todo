import React, { Component } from 'react';
import {FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

class Input extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <FormGroup
          controlId="formBasicText"
        >
          <ControlLabel>Add Task</ControlLabel>
          <FormControl
            type="text"
            value={this.props.value}
            placeholder="Enter text"
            onChange={this.props.handleChange}
          />
          <FormControl.Feedback />
        </FormGroup>
        <Button bsStyle="primary" type='submit'>Submit</Button>
      </form>
    )
  }
}

export default Input;
