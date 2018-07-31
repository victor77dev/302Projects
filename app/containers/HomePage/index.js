/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { FormattedMessage } from 'react-intl';
import Graph from 'components/Graph';

import { makeSelectSearchResult } from 'containers/SearchBoxContainer/selectors';

import messages from './messages';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { match, history, projectData } = this.props;
    return (
      <div style={{ width: '100%', height: '100%' }}>
        <h1>
          <FormattedMessage {...messages.header} />
        </h1>
        <h4>
          <FormattedMessage {...messages.content} />
        </h4>
        <Graph match={match} history={history} projectData={projectData} />
      </div>
    );
  }
}

HomePage.propTypes = {
  match: PropTypes.object,
  history: PropTypes.object,
  projectData: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  projectData: makeSelectSearchResult(),
});

const withConnect = connect(mapStateToProps);

export default compose(
  withConnect,
)(HomePage);
