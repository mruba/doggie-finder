/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import Helmet from 'react-helmet';
import styled, { ThemeProvider } from 'styled-components';

import Header from 'components/Header';
import Footer from 'components/Footer';
import withProgressBar from 'components/ProgressBar';


const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

const theme = {
  primary: '#ff9999',
  secondary: '#66ffcc',
  success: '#8aff80',
  danger: '#ff9580',
  warning: 'ffd580',
};

export function App(props) {
  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <Helmet
          titleTemplate="%s - React.js Boilerplate"
          defaultTitle="React.js Boilerplate"
          meta={[
            { name: 'description', content: 'A React.js Boilerplate application' },
          ]}
        />
        <Header />
        {React.Children.toArray(props.children)}
        <Footer />
      </AppWrapper>
    </ThemeProvider>
  );
}

App.propTypes = {
  children: React.PropTypes.node,
};

export default withProgressBar(App);
