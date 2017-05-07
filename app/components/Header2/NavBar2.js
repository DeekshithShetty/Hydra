import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { Link } from 'react-router';
import { performLogout } from '../../containers/App/actions';
import LoadingButton from './LoadingButton';
import { makeSelectLoggedIn, makeSelectCurrentlySending } from './selectors';

class Nav extends Component {
  render() {
    // Render either the Log In and register buttons, or the logout button
    // based on the current authentication state.
    const navButtons = this.props.loggedIn ? (
        <div>
          <Link to="/dashboard" className="btn btn--dash btn--nav">
            <FormattedMessage {...messages.home} />
          </Link>
          {this.props.currentlySending ? (
            <LoadingButton className="btn--nav" />
          ) : (
            <a href="#" className="btn btn--login btn--nav" onClick={this.props.onLogout}>Logout</a>
          )}
        </div>
      ) : (
        <div>
          <Link to="/register" className="btn btn--login btn--nav">Register</Link>
          <Link to="/login" className="btn btn--login btn--nav">
            <FormattedMessage {...messages.login} />
          </Link>
        </div>
      );

    return(
      <div className="nav">
        <div className="nav__wrapper">
          <Link to="/" className="nav__logo-wrapper"><h1 className="nav__logo">Login&nbsp;Flow</h1></Link>
          { navButtons }
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  loggedIn: React.PropTypes.bool,
  currentlySending: React.PropTypes.bool,
  onLogout : React.PropTypes.func,
}

export function mapDispatchToProps(dispatch) {
  return {
    onLogout: () => dispatch(performLogout()),
  };
}

const mapStateToProps = createStructuredSelector({
  loggedIn: makeSelectLoggedIn(),
  currentlySending: makeSelectCurrentlySending(),
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(Header);
