import React, {Component} from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

import FormWrapper from './FormWrapper';
import Header from './Header';
import H2 from '../../components/H2';

import RegisterForm from './RegisterForm';
import messages from './messages';

import { registerRequest } from '../App/actions';
import { changeForm } from './actions';
import { makeSelectCurrentlySending, makeSelectError } from '../App/selectors';
import { makeSelectFormState } from './selectors';

const RegisterPageWrapper = styled.div`
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

class RegisterPage extends Component {

  render () {
    let { formState, currentlySending, error } = this.props;

    return (
      <RegisterPageWrapper>
        <FormWrapper>
          <Header>
            <H2>
              <FormattedMessage {...messages.registerHeader} />
            </H2>
          </Header>
          <RegisterForm data={formState} onChangeUsername={this.props.onChangeUsername} onChangePassword={this.props.onChangePassword} onSubmit={this.props.onRegister} error={error} currentlySending={currentlySending} />
        </FormWrapper>
      </RegisterPageWrapper>
    )
  }
}

RegisterPage.propTypes = {
  formState: React.PropTypes.object,
  currentlySending: React.PropTypes.bool,
  error: React.PropTypes.string,
  history: React.PropTypes.object,
  onRegister: React.PropTypes.func,
  dispatch: React.PropTypes.func
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
  currentlySending: makeSelectCurrentlySending(),
  error: makeSelectError(),
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
