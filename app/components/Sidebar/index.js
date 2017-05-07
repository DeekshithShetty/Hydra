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
    background: #212225;
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

class Sidebar extends Component {
    
  render () {

    return (
      <SidebarWrapper id="sidebar">
        <AppLogo />
        <ProfileView />
        <NavigationList>
            <NavigationItem>
                <StyledLink to='/dashboard'>Dashboard</StyledLink>
            </NavigationItem>
            <NavigationItem>
                <StyledLink to='/module1'>Module 1</StyledLink>
            </NavigationItem>
            <NavigationItem>
                <StyledLink to='/module2'>Module 2</StyledLink>
            </NavigationItem>
            <NavigationItem>
                <StyledLink to='/module3'>Module 3</StyledLink>
            </NavigationItem>
            <NavigationItem>
                <Menu />
            </NavigationItem>
            <NavigationItem>
                <StyledLink to='/about'>About</StyledLink>
            </NavigationItem>
        </NavigationList>
      </SidebarWrapper>
    )
  }
}

export default Sidebar;
