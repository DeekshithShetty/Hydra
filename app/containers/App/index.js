import React, {Component} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';

// External javscript files needed for the app
import '../../public/layout.js';

import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar';
import Content from './Content';
import Footer from './Footer';

import { makeSelectCss } from './selectors';

const AppWrapper = styled.div`

    display: block;
    overflow: hidden;
    background: green;

    & > * {
      position: relative;
      box-sizing: border-box;
    }
    
    @media all and (max-width: 800px) {

        display: -webkit-box;
        display: -moz-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;  
        
        -webkit-flex-flow: column wrap;
        flex-flow: column wrap;

        min-height: 100vh;
        overflow: auto;

        & > * {
				  width: 100%;
				}
    }
`;

class App extends Component {

  render () {
    const { css } = this.props;

    return (
      <AppWrapper>
        <Sidebar>Aside</Sidebar>
        <Header loggedIn={this.props.data.loggedIn}
          currentlySending={this.props.data.currentlySending}
          history={this.props.history}
          dispatch={this.props.dispatch}
          location={this.props.location}/>
        <Content id="content">
          {this.props.children}
        </Content>  
        <Footer id="footer">Footer</Footer>
      </AppWrapper>
    )
  }
}

App.propTypes = {
  data: React.PropTypes.object,
  history: React.PropTypes.object,
  location: React.PropTypes.object,
  children: React.PropTypes.object,
  dispatch: React.PropTypes.func
}

function select (state) {
  return {
    data: state
  }
}

export default connect(select)(App)
