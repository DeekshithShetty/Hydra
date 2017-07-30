import React, {Component} from 'react';
import {Link} from 'react-router';
import styled from 'styled-components';

import AppLogo from './AppLogo';
import ProfileView from './ProfileView';
import NavigationList from './NavigationList';
import Menu from './Menu';
import NavigationItem from './NavigationItem';
import StyledLink from './StyledLink';
import A from './A';

const SidebarWrapper = styled.aside`
    float:left;
    width: 15%;
    background: #152032;
    min-height: 85vh;
    margin-bottom: -5000px;
    padding-bottom: 5000px;

    @media all and (max-width: 800px) {
        min-height: auto;
        height: auto;
        margin-bottom: 0;
        padding-bottom: 0;
    }
`;

const Divider = styled.div`
    border-bottom: 1.5px solid #051022;
    margin: 1em 0em 1em 0em;
`;

class Sidebar extends Component {
    
  render () {

    return (
      <SidebarWrapper id="sidebar">
        <AppLogo />
        <ProfileView />
        <Divider />
        <NavigationList>
            <NavigationItem>
                <StyledLink to='/dashboard' activeClassName="activeSidebarLink">Dashboard</StyledLink>
            </NavigationItem>
            <NavigationItem>
                <StyledLink to='/devices' activeClassName="activeSidebarLink">Devices</StyledLink>
            </NavigationItem>
            <NavigationItem>
                <StyledLink to='/locks' activeClassName="activeSidebarLink">Locks</StyledLink>
            </NavigationItem>
            <NavigationItem>
                <Menu />
            </NavigationItem>
        </NavigationList>
        <Divider />
        <NavigationList>
            <NavigationItem>
                <StyledLink to='/about' activeClassName="activeSidebarLink">About</StyledLink>
                <StyledLink to='/feedback' activeClassName="activeSidebarLink">Feedback</StyledLink>
            </NavigationItem>
        </NavigationList>
        <Divider />
      </SidebarWrapper>
    )
  }
}

export default Sidebar;
