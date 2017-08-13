import React, { PropTypes } from 'react'
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';

import messages from './messages';

import Label from '../../components/Label';
import Input from './Input';
import SubmitButton from '../../components/SubmitButton';

import ErrorMessage from '../../components/ErrorMessage'
import LoadingButton from '../../components/LoadingButton'

const LoginForm = ({ data, error, currentlySending, onChangeUsername, onChangePassword, onSubmit, intl }) => {

  const usernamePlaceholder = intl.formatMessage(messages.usernameText);
  const passwordPlaceholder = intl.formatMessage(messages.passwordText);

  return (
    <form onSubmit={ e => {
            e.preventDefault();
            onSubmit(data.username, data.password);
          }
        }>
          {error ? <ErrorMessage error={error} /> : null}
          <Input
            type='text'
            id='username'
            value={data.username}
            placeholder={usernamePlaceholder}
            onChange={ e => onChangeUsername({...data, username: e.target.value}) }
            autoCorrect='off'
            autoCapitalize='off'
            spellCheck='false' />
          <Input
            id='password'
            type='password'
            value={data.password}
            placeholder={passwordPlaceholder}
            onChange={ e => onChangePassword({...data, password: e.target.value}) } />
          {currentlySending ? (
            <LoadingButton />
          ) : (
            <SubmitButton>
              <FormattedMessage {...messages.loginButtonText} />
            </SubmitButton>
              )}
      </form>
  );
};

LoginForm.propTypes = {
  data: PropTypes.object.isRequired,
  error: PropTypes.string.isRequired,
  currentlySending: PropTypes.bool.isRequired,
  onChangeUsername: PropTypes.func.isRequired,
  onChangePassword: PropTypes.func.isRequired, 
  onSubmit: PropTypes.func.isRequired, 
  intl: intlShape.isRequired,
}

export default injectIntl(LoginForm);