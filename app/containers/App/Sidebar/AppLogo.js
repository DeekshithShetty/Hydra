import React, {Component} from 'react';
import {Link} from 'react-router';
import styled from 'styled-components';

import StyledLink from './StyledLink';

const AppLogoWrapper = styled.div`
    padding: 0.5em;
    height: 4em;
    text-align:center;
    color: #EEE;
    background: #41C2C2;
`;

const AppNameLink = styled(StyledLink)`
    padding: 0.45em;
    color: #EEE;
    font-size: 1.2em;

    @media all and (max-width: 600px) {
        border-top: 0px; 
        border-bottom: 0px;
    }
`;

class AppLogo extends Component {
  render () {
    return (
      <AppLogoWrapper>
        <AppNameLink to='/dashboard'>Hydra</AppNameLink>
      </AppLogoWrapper>
    )
  }
}

export default AppLogo;
