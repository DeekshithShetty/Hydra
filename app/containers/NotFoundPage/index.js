import React, {Component} from 'react'
import {Link} from 'react-router';
import styled from 'styled-components';
import {browserHistory} from 'react-router';

import H1 from '../../components/H1';
import H2 from '../../components/H2';

const PageWrapper = styled.div`
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;  

  -webkit-flex-flow: row wrap;
  flex-flow: row wrap;

  height: 100vh;
  background: #81E2E2;

  @media all and (max-width: 800px) {
    min-height: 100vh;
    height: 100%;
  }
`;

const FormWrapper = styled.div`
  margin: auto;
  z-index: 1;
  padding: 45px 100px;
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

  @media all and (max-width: 800px) {
    margin: 0;
    width: 100%;
    max-width: none;
    padding: 45px;
    background: #81E2E2;
  }

`;

const Header = styled.div`
  margin-bottom: 50px;
`;

const GoBackLink = styled.a`
  display: inline-block;
  box-sizing: border-box;
  padding: 0.8em;
  width: 100%;
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
  background: #41C2C2;
  color: #FFF;
  transition: all 0.5s;

  &:hover, &:active {
    background: #21A2A2;
  }
`;

class NotFoundPage extends React.PureComponent {

  onGoHomeClick(event) {
    event.preventDefault();
    return browserHistory.push('/login');
  }

  render () {
    return (
      <PageWrapper>
        <FormWrapper>
          <Header>
            <H1>404</H1>
            <H1>Page not found</H1>
          </Header>
          <GoBackLink onClick={this.onGoHomeClick} href="#">Go Home</GoBackLink>
        </FormWrapper>
      </PageWrapper>
    )
  }
}

export default NotFoundPage;
