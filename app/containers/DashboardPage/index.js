import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Section from './Section';
import CenteredSection from './CenteredSection';

const Heading = styled.p`
  color: #444;
  font-weight: 500;
  font-size: 2em;
  margin-top:0;
`;

function DashboardPage () {
  return (
    <article>
      <Helmet
          title="Dashboard Page"
          meta={[
            { name: 'description', content: 'Project Hydra - React.js Boilerplate dashboard' },
          ]}
        />
      <Section className='text-section'>
        <Heading>Welcome to Hydra</Heading>
        <p>
          This is your dashboard
        </p>
      </Section>
    </article>
  )
}

export default DashboardPage
