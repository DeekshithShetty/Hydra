import React from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import PageWrapper from './PageWrapper';
import ReposList from './ReposList';
import Section from './Section';
import DashboardWrapper from './DashboardWrapper';
import DashboardCard from './DashboardCard';
import DashboardCardHeading from './DashboardCardHeading';
import DashboardCardContent from './DashboardCardContent';

import { makeSelectRepos, makeSelectLoading, makeSelectError } from './selectors';
import { loadRepos } from './actions';

const Heading = styled.p`
  color: #444;
  font-weight: 300;
  font-size: 1.5em;
  margin:0;
`;

class DashboardPage extends React.PureComponent {

  componentDidMount() {
    this.props.onComponentLoad();
  }

  render () {
    const { loading, error, repos } = this.props;
    const reposListProps = {
      loading,
      error,
      repos,
    };

    return (
      <PageWrapper>
        <Helmet
            title="Dashboard Page"
            meta={[
              { name: 'description', content: 'Project Hydra - React.js Boilerplate dashboard' },
            ]}
          />
        <Section>
          <Heading>Recent Activity</Heading>
        </Section>
        <DashboardWrapper>

          <DashboardCard>
            <DashboardCardHeading>
              <p>Repo List - Card 1</p>
            </DashboardCardHeading>
            <DashboardCardContent>
              <ReposList {...reposListProps} />
            </DashboardCardContent>
          </DashboardCard>

          <DashboardCard>
            <DashboardCardHeading>
              <p>Repo List - Card 2</p>
            </DashboardCardHeading>
            <DashboardCardContent>
              <ReposList {...reposListProps} />
            </DashboardCardContent>
          </DashboardCard>

        </DashboardWrapper>
        
      </PageWrapper>
    )
  }
}

DashboardPage.propTypes = {
  loading: React.PropTypes.bool,
  error: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool,
  ]),
  repos: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.bool,
  ]),
  onComponentLoad: React.PropTypes.func,
}

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onComponentLoad: () => {
      dispatch(loadRepos());
    },
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
