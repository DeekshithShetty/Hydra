import React, {Component} from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

import Header from './Header';
import H2 from '../../components/H2';

import RegisterForm from './RegisterForm';
import messages from './messages';

import { registerRequest } from '../App/actions';
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
  padding: 45px;
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
    padding: 45px;
    background: #81E2E2;
  }

`;

class RegisterPage extends Component {

  render () {
    let { formState, currentlySending, error } = this.props;

    return (
      <PageWrapper>
        <FormWrapper>
          <Header>
            <H2>
              <FormattedMessage {...messages.registerHeader} />
            </H2>
          </Header>
          <RegisterForm data={formState} onChangeUsername={this.props.onChangeUsername} onChangePassword={this.props.onChangePassword} onSubmit={this.props.onRegister} error={error} currentlySending={currentlySending} />
        </FormWrapper>
      </PageWrapper>
    )
  }
}

RegisterPage.propTypes = {
  formState: React.PropTypes.object,
  currentlySending: React.PropTypes.bool,
  error: React.PropTypes.string,
  onRegister: React.PropTypes.func,
  onChangeUsername: React.PropTypes.func,
  onChangePassword: React.PropTypes.func,
}

export function mapDispatchToProps(dispatch, ownProps) {
  return {
    onRegister: (username, password) => dispatch(registerRequest({username, password})),
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
export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
