import React, { Component } from 'react';
import RegisterForm from './components/RegisterForm'
import { SubmissionError } from 'redux-form'

class RegisterFormContainer extends Component {
  submit = values => {
    window.alert(JSON.stringify(values, null, 4))
  }

  getInitalValues() {
    return {
      preference: 'spaces',
      newsletter: true
    }
  }

  render() {
    return (
      <RegisterForm onSubmit={this.submit} initialValues={this.getInitalValues()} />
    );
  }
}

export default RegisterFormContainer;
