import React, {Component} from 'react';
import {connect} from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';

// External javscript files needed for the app
import { jqueryOnHamburgerButtonClick } from '../../public/layout.js';

import Header from './Header'
import Sidebar from './Sidebar';
import Content from './Content';
import Footer from './Footer';

import { logout } from '../LoginPage/actions';
import { toggleSidebarDisplay } from './actions';
import { makeSelectCss } from './selectors';

const AppWrapper = styled.div`

    display: block;
    overflow: hidden;
    background: #111;

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

class App extends React.PureComponent {

  render () {
    console.log("App props -");
    console.dir(this.props);

    const { css } = this.props;

    return (
      <AppWrapper>
        <Helmet
          titleTemplate="%s - Project Hydra"
          defaultTitle="Project Hydra"
          meta={[
            { name: 'description', content: 'Project Hydra - React.js Boilerplate' },
          ]}
        />
        <Sidebar />
        <Header onLogout={this.props.onLogout} 
          onToggleSidebarDisplay={this.props.onToggleSidebarDisplay} />
        <Content id="content">
          {this.props.children}
        </Content>  
        <Footer id="footer">© 2017 Team Hydra</Footer>
      </AppWrapper>
    )
  }
}

App.propTypes = {
  cssState: React.PropTypes.object,
  history: React.PropTypes.object,
  location: React.PropTypes.object,
  children: React.PropTypes.object,
  dispatch: React.PropTypes.func
}

export function mapDispatchToProps(dispatch, ownProps) {
  return {
    onLogout: (event) => {
      event.preventDefault();
      return dispatch(logout());
    },
    onToggleSidebarDisplay: () => {
      event.preventDefault();
      jqueryOnHamburgerButtonClick();
      return dispatch(toggleSidebarDisplay());
    }
  };
}

const mapStateToProps = createStructuredSelector({
  cssState: makeSelectCss,
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(App);
