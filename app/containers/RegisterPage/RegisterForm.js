import React, { PropTypes } from 'react'
import { FormattedMessage } from 'react-intl';

import messages from './messages';

import Form from './Form';
import Label from '../../components/Label';
import Input from './Input';
import SubmitButton from '../../components/SubmitButton';

import ErrorMessage from '../../components/ErrorMessage'
import LoadingButton from '../../components/LoadingButton'

const RegisterForm = ({ data, error, currentlySending, onChangeUsername, onChangePassword, onSubmit }) => (
  <Form onSubmit={ e => {
        e.preventDefault();
        onSubmit(data.username, data.password);
      }
    }>
      {error ? <ErrorMessage error={error} /> : null}
      <Input
        type='text'
        id='username'
        value={data.username}
        placeholder={<FormattedMessage {...messages.usernameText} />}
        onChange={ e => onChangeUsername({...data, username: e.target.value}) }
        autoCorrect='off'
        autoCapitalize='off'
        spellCheck='false' />
      <Input
        id='password'
        type='password'
        value={data.password}
        placeholder={<FormattedMessage {...messages.passwordText} />}
        onChange={ e => onChangePassword({...data, password: e.target.value}) } />
      {currentlySending ? (
        <LoadingButton />
      ) : (
        <SubmitButton>
          <FormattedMessage {...messages.registerButtonText} />
        </SubmitButton>
          )}
    </Form>
)

RegisterForm.propTypes = {
  data: PropTypes.object.isRequired,
  error: PropTypes.string.isRequired,
  currentlySending: PropTypes.bool.isRequired,
  onChangeUsername: PropTypes.func.isRequired,
  onChangePassword: PropTypes.func.isRequired, 
  onSubmit: PropTypes.func.isRequired, 
}

export default RegisterForm;