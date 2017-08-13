import React from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import {Line as LineChart} from 'react-chartjs';
import {Pie as PieChart} from 'react-chartjs';

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

    const hexColorCodes = ["#FF5A5E", "#5AD3D1", "#FF9154", "#AED67A", "#FFC870"];

    const myPieChartData = [];

    const deviceChartData = {
      labels: [],
      datasets: [
          {
              label: "Stargazers",
              strokeColor: "#66BB6A",
              pointColor: "rgba(102,187,106,0.5)",
              pointStrokeColor: "#fff",
              pointHoverRadius: 5,
              pointRadius: 1,
              pointHitRadius: 10,
              data: [],
              spanGaps: false,
          },
          {
            label: "Forks",
            strokeColor: "#F44336",
            pointColor: "rgba(244,67,54,0.5)",
            pointStrokeColor: "#fff",
            pointHoverRadius: 5,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [],
            spanGaps: false,
        }
      ]
    };

    var reposArrayLength = (repos.length > 5) ? 5 : repos.length;
    for (var i = 0; i < reposArrayLength; i++) {
        deviceChartData.labels.push(repos[i].name);
        deviceChartData.datasets[0].data.push(repos[i].stargazers_count);
        deviceChartData.datasets[1].data.push(repos[i].forks);
        myPieChartData.push({
          value: repos[i].forks,
          color: hexColorCodes[i],
          label: repos[i].name
        })
    }

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        bezierCurve : false,
        datasetFill : false
    };

    const devicesCountPieChartContent = reposListProps.loading ? 
      <h3>Loading ...</h3>
      :
      <PieChart data={myPieChartData} options={chartOptions} redraw={true}/>;

    const devicesLineChartContent = reposListProps.loading ? 
      <h3>Loading ...</h3>
      :
      <LineChart data={deviceChartData} options={chartOptions} redraw={true}/>;

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
              <p>Repo Trends</p>
            </DashboardCardHeading>
            <DashboardCardContent>
              {devicesCountPieChartContent}
            </DashboardCardContent>
          </DashboardCard>

          <DashboardCard>
            <DashboardCardHeading>
              <p>Repo Trends</p>
            </DashboardCardHeading>
            <DashboardCardContent>
              {devicesLineChartContent}
            </DashboardCardContent>
          </DashboardCard>

          <DashboardCard width="100%">
            <DashboardCardHeading>
              <p>Repo List</p>
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
