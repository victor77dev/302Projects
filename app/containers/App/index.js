/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route, HashRouter } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';
import ProjectDetailsContainer from 'containers/ProjectDetailsContainer/Loadable';

import Grid from '@material-ui/core/Grid';

const AppWrapper = styled.div`
  max-width: calc(1080px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

const styles = {
  mainApp: {
    marginRight: 'auto',
    marginLeft: 'auto',
    display: 'flex',
    paddingTop: 68,
  },
};

export default function App() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - 302 Projects"
        defaultTitle="302 Projects"
      >
        <meta name="description" content="302 Projects - Found Projects" />
      </Helmet>
      <HashRouter>
        <div>
          <Route component={Header} />
          <Grid container justify="center" style={styles.mainApp}>
            <Route exact path="/NotFound/:type" component={NotFoundPage} />
            <Route exact path="/project/:projectKey" component={ProjectDetailsContainer} />
            <Switch>
              <Route path="/*" component={HomePage} />
            </Switch>
          </Grid>
          <Route component={Footer} />
        </div>
      </HashRouter>
    </AppWrapper>
  );
}
