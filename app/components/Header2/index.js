import React from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import A from './A';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Banner from './banner.jpg';
import messages from './messages';

import LoadingButton from './LoadingButton';
import { makeSelectLoggedIn } from './selectors';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const navButtons = this.props.loggedIn ? (
        <div>
          <HeaderLink to="/">
            <FormattedMessage {...messages.home} />
          </HeaderLink>
          <HeaderLink to="/features">
            <FormattedMessage {...messages.features} />
          </HeaderLink>
        </div>
      ) : (
          <HeaderLink to="/login">
            <FormattedMessage {...messages.login} />
          </HeaderLink>
      );

    return (
      <div>
        <NavBar>
          { navButtons }
        </NavBar>
      </div>
    );
  }
}

Header.propTypes = {
  loggedIn: React.PropTypes.bool,
}

const mapStateToProps = createStructuredSelector({
  loggedIn: makeSelectLoggedIn(),
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps)(Header);