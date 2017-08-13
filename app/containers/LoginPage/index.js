import React, {Component} from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import {browserHistory} from 'react-router';

import Header from './Header';
import H2 from '../../components/H2';
import Logo from './logo.png';

import LoginForm from './LoginForm';
import MicrosoftLogin from './MicrosoftLogin';
import messages from './messages';

import { loginRequest, loginUsingMsRequest } from '../App/actions';
import { changeForm } from './actions';
import { makeSelectCurrentlySendingAuthRequest, makeSelectAuthRequestError } from '../App/selectors';
import { makeSelectFormState } from './selectors';

const PageWrapper = styled.div`
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;  
  
  -webkit-flex-flow: row wrap;
  flex-flow: row wrap;

  height: 100vh;
  background: #81E2E2;

  @media all and (max-width: 800px) {
    min-height: 100vh;
    height: 100%;
  }
`;

const FormWrapper = styled.div`
  margin: auto;
  z-index: 1;
  max-width: 360px;
  padding: 30px;
  text-align: center;
  background: #FFF;
  border-radius: 5px;

  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;

  /* On mouse-over, add a deeper shadow */
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }

  @media all and (max-width: 800px) {
    margin: 0;
    width: 100%;
    max-width: none;
    background: #81E2E2;
  }
`;

const CircularLogoImage = styled.img`
  height: 120px;
  width: 120px;
  margin: 0 auto;
  display: block;
  border-radius: 50%;
`;

const A = styled.a`
  text-decoration: none;
  color: #21A2A2;
  transition: all 0.5s;

  &:hover {
    color: #118282;
  }
`;

export class LoginPage extends React.PureComponent {

  render () {
    const { formState, currentlySending, error } = this.props;

    return (
      <PageWrapper>
        <FormWrapper>
          <Header>
            <CircularLogoImage src={ Logo } />
            <H2>
              <FormattedMessage {...messages.loginHeader} />
            </H2>
          </Header>
          <LoginForm data={formState} onChangeUsername={this.props.onChangeUsername} onChangePassword={this.props.onChangePassword} onSubmit={this.props.onLogin} error={error} currentlySending={currentlySending} />
          
          <p>or</p>
          
          <MicrosoftLogin onClick={this.props.onMicrosoftLogin} />

          <p>Not registered? <A onClick={this.props.onRegisterClick}  href="#">Create an account</A></p>
        </FormWrapper>
      </PageWrapper>
    )
  }
}

LoginPage.propTypes = {
  formState: React.PropTypes.object,
  currentlySending: React.PropTypes.bool,
  error: React.PropTypes.string,
  onLogin: React.PropTypes.func,
  onChangeUsername: React.PropTypes.func,
  onChangePassword: React.PropTypes.func,
  onMicrosoftLogin: React.PropTypes.func,
  onRegisterClick: React.PropTypes.func,
}

export function mapDispatchToProps(dispatch, ownProps) {
  return {
    onLogin: (username, password) => dispatch(loginRequest({username, password})),
    onChangeUsername: (newFormState) => dispatch(changeForm(newFormState)),
    onChangePassword: (newFormState) => dispatch(changeForm(newFormState)),
    onMicrosoftLogin: () => dispatch(loginUsingMsRequest()),
    onRegisterClick: (event) => {
      event.preventDefault();
      return browserHistory.push('/register');
    },
  };
}

const mapStateToProps = createStructuredSelector({
  formState: makeSelectFormState(),
  currentlySending: makeSelectCurrentlySendingAuthRequest(),
  error: makeSelectAuthRequestError(),
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
