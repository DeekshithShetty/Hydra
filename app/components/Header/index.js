import React, {Component} from 'react';
import {Link} from 'react-router';
import styled from 'styled-components';

import HamburgerButton from './HamburgerButton';
import NavigationList from './NavigationList';
import StyledLink from './StyledLink';
import NavigationLink from './NavigationLink';
import A from './A';

import {logout, clearError} from '../../containers/LoginPage/actions';
import {toggleSidebarDisplay} from '../../containers/App/actions';

const HeaderWrapper = styled.header`

    float:right;
    width: 85%;
    list-style: none;
    margin: 0;
    padding: 0.5em; 
    background: #41C2C2;

    border-bottom: 1px solid rgba(0,0,0,.1);
    box-shadow: 0 1px 1px 0 rgba(0,0,0,.1);
    
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

class Header extends Component {
  constructor (props) {
    super(props)
    this._logout = this._logout.bind(this)
    this._clearError = this._clearError.bind(this)
    this._toggleSidebarDisplay = this._toggleSidebarDisplay.bind(this)
  }

  render () {
    return (
      <HeaderWrapper id="header">
        <NavigationList>
          <li>
            <HamburgerButton id="hamburger-btn">&#9776;</HamburgerButton>
          </li>
          <li>
            <StyledLink to='/dashboard' className='nav__logo-wrapper' onClick={this._clearError}>
              Dashboard
            </StyledLink>
          </li>
        </NavigationList>
        
        <NavigationList>
          <li>
            <NavigationLink to='#' onClick={this._logout}>Logout</NavigationLink>
          </li>
        </NavigationList>
    </HeaderWrapper>
    )
  }

  _logout () {
    this.props.dispatch(logout())
  }

  _clearError () {
    this.props.dispatch(clearError())
  }

  _toggleSidebarDisplay () {
    this.props.dispatch(toggleSidebarDisplay())
  }
}

Header.propTypes = {
  dispatch: React.PropTypes.func
}

export default Header
