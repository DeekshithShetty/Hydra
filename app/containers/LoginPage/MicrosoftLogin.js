import React, { PropTypes } from 'react';
import styled from 'styled-components';

import MicrosoftLoginLogo from './microsoft-login-logo.png';

import messages from './messages';

const LoginButton = styled.div`
    width: 100%;
    background: #0072C6;
    color: #EEE;
    padding: 0.8em;
    transition: all 0.5s;

    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;  
    
    -webkit-flex-flow: row wrap;
    flex-flow: row wrap;
    justify-content: center;

    -webkit-font-smoothing: antialiased;
    -webkit-touch-callout: none;
    user-select: none;
    cursor: pointer;
    outline: 0;

    &:hover {
        background: #0052A6;
    }

    & > * {
        vertical-align: middle;
        height: 20px;
        line-height: 20px;
    }

    & > img {
        height: 20px;
        width: 20px;
        display: block;
    }

    & > div {
        text-align: left;
        padding: 0 0.8em;
    }
`;

const MicrosoftLogin = ({ onClick }) => {

  return (
    <LoginButton onClick={ onClick }>
        <img src= {MicrosoftLoginLogo} />
        <div>
            Signin with Microsoft
        </div>
    </LoginButton>
  );

};

MicrosoftLogin.propTypes = {
    onClick: PropTypes.func.isRequired, 
}

export default MicrosoftLogin;