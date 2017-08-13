import React, {PropTypes} from 'react';
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
    height: 100vh;
    overflow: auto;

    @media all and (max-width: 800px) {
        height: auto;
        margin-bottom: 0;
        padding-bottom: 0;
    }
`;

const Divider = styled.div`
    border-bottom: 1.5px solid #051022;
    margin: 1em 0em 1em 0em;
`;

const Sidebar = ({ signedInUsername }) => {

    return (
      <SidebarWrapper id="sidebar">
        <AppLogo />
        <ProfileView signedInUsername={signedInUsername} />
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

Sidebar.propTypes = {
    signedInUsername: PropTypes.string.isRequired,
}

export default Sidebar;
