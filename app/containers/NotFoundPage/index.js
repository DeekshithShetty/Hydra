import React, {Component} from 'react'
import {Link} from 'react-router';
import styled from 'styled-components';

import H1 from '../../components/H1';
import H2 from '../../components/H2';

const NotFoundPageWrapper = styled.div`
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;  
    
    -webkit-flex-flow: row wrap;
    flex-flow: row wrap;

    min-height: 100vh;
    background: #41C2C2;
`;

const FormWrapper = styled.div`
  margin: auto;
  z-index: 1;
  padding: 45px 150px;
  text-align: center;
  background: #FFF;
  border-radius: 5px;

  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;

  /* On mouse-over, add a deeper shadow */
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
`;

const Header = styled.div`
  margin-bottom: 50px;
`;

const GoBackLink = styled.a`
  display: inline-block;
  box-sizing: border-box;
  padding: 0.25em 2em;
  text-decoration: none;
  border-radius: 4px;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 16px;
  border: 2px solid #41addd;
  color: #41addd;

  &:active {
    background: #41addd;
    color: #fff;
  }
`;

class NotFoundPage extends React.PureComponent {
  render () {
    return (
      <NotFoundPageWrapper>
        <FormWrapper>
          <Header>
            <H1>404</H1>
            <H1>Page not found</H1>
          </Header>
          <GoBackLink href="/login">Go Home</GoBackLink>
        </FormWrapper>
      </NotFoundPageWrapper>
    )
  }
}

export default NotFoundPage
