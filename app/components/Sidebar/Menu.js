import React, {Component} from 'react';
import {Link} from 'react-router';
import styled from 'styled-components';

import MenuHeader from './MenuHeader';
import MenuHeaderItem from './MenuHeaderItem';
import MenuDropdownList from './MenuDropdownList';
import MenuDropdownItem from './MenuDropdownItem';
import StyledLink from './StyledLink';
import A from './A';

const MenuWrapper = styled.div`
    &:hover > :nth-child(2) {
        display: -webkit-box;
        display: -moz-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;

        justify-content: flex-start;
        padding-left: 0;
        -webkit-flex-flow: column wrap;
    }
`;

class Menu extends Component {
  render () {
    return (
      <MenuWrapper>
        <MenuHeader>
            <StyledLink to='/module4'>Module 4</StyledLink>
            <StyledLink to='#'>&#709;</StyledLink>
        </MenuHeader>    
        <MenuDropdownList>
            <MenuDropdownItem>
              <StyledLink href='/module4/web'>Web</StyledLink>
            </MenuDropdownItem>
            <MenuDropdownItem>
              <StyledLink href='/module4/print'>Print</StyledLink>
            </MenuDropdownItem>
            <MenuDropdownItem>
              <StyledLink href='/module4/other'>Other</StyledLink>
            </MenuDropdownItem>
        </MenuDropdownList>
      </MenuWrapper>
    )
  }
}

export default Menu;
