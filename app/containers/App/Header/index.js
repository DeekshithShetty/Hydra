import React, { PropTypes } from 'react'
import {Link} from 'react-router';
import styled from 'styled-components';

import HamburgerButton from './HamburgerButton';
import NavigationList from './NavigationList';
import StyledLink from './StyledLink';
import NavigationLink from './NavigationLink';
import A from './A';

const HeaderWrapper = styled.header`

    float:right;
    width: 85%;
    list-style: none;
    margin: 0;
    padding: 0.5em; 
    background: #EEE;
    color: #444;
    
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    
    -webkit-flex-flow: row wrap;
    justify-content: space-between;

    @media all and (max-width: 800px) {
        order: -1;
        justify-content: space-between;
        height: 4em;
    }

    @media all and (max-width: 600px) {
        padding: 0;
    }
`;

const Header = ({ onLogout, onToggleSidebarDisplay }) => (
  <HeaderWrapper id="header">
        <NavigationList>
          <li>
            <HamburgerButton id="hamburger-btn" onClick={onToggleSidebarDisplay}>&#9776;</HamburgerButton>
          </li>
          <li>
            <StyledLink to='/dashboard'>
              Dashboard
            </StyledLink>
          </li>
        </NavigationList>
        
        <NavigationList>
          <li>
            <NavigationLink to='#' onClick={onLogout}>&#x2716;</NavigationLink>
          </li>
        </NavigationList>
    </HeaderWrapper>
);


Header.propTypes = {
  onLogout: PropTypes.func.isRequired,
  onToggleSidebarDisplay: PropTypes.func.isRequired, 
}

export default Header;
