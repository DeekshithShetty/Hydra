import React, {Component} from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

import FormWrapper from './FormWrapper';
import Header from './Header';
import H2 from '../../components/H2';
import Logo from './logo.png';

import LoginForm from './LoginForm';
import messages from './messages';

import { loginRequest } from '../App/actions';
import { changeForm } from './actions';
import { makeSelectCurrentlySendingAuthRequest, makeSelectAuthRequestError } from '../App/selectors';
import { makeSelectFormState } from './selectors';

const LoginPageWrapper = styled.div`
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;  
    
    -webkit-flex-flow: row wrap;
    flex-flow: row wrap;

    min-height: 100vh;
    background: #41C2C2;
`;

const CircularLogoImage = styled.img`
    height: 120px;
    width: 120px;
    margin: 0 auto;
    display: block;
    border-radius: 50%;
`;

export class LoginPage extends React.PureComponent {

  render () {
    const { formState, currentlySending, error } = this.props;

    return (
      <LoginPageWrapper>
        <FormWrapper>
          <Header>
            <CircularLogoImage src={ Logo } />
            <H2>
              <FormattedMessage {...messages.loginHeader} />
            </H2>
          </Header>
          <LoginForm data={formState} onChangeUsername={this.props.onChangeUsername} onChangePassword={this.props.onChangePassword} onSubmit={this.props.onLogin} error={error} currentlySending={currentlySending} />
          <p>Not registered? <a href="/register">Create an account</a></p>
        </FormWrapper>
      </LoginPageWrapper>
    )
  }
}

LoginPage.propTypes = {
  formState: React.PropTypes.object,
  currentlySending: React.PropTypes.bool,
  error: React.PropTypes.string,
  history: React.PropTypes.object,
  onLogin: React.PropTypes.func,
  dispatch: React.PropTypes.func
}

export function mapDispatchToProps(dispatch, ownProps) {
  return {
    onLogin: (username, password) => dispatch(loginRequest({username, password})),
    onChangeUsername: (newFormState) => dispatch(changeForm(newFormState)),
    onChangePassword: (newFormState) => dispatch(changeForm(newFormState))
  };
}

const mapStateToProps = createStructuredSelector({
  formState: makeSelectFormState(),
  currentlySending: makeSelectCurrentlySendingAuthRequest(),
  error: makeSelectAuthRequestError(),
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
