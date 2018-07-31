/**
 *
 * ProjectDetailsContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import ProjectDetails from 'components/ProjectDetails';
import { makeSelectSearchResult } from 'containers/SearchBoxContainer/selectors';

function ProjectDetailsContainer(props) {
  const { history, match, projectData } = props;
  return (
    <ProjectDetails history={history} match={match} projectData={projectData} />
  );
}

ProjectDetailsContainer.propTypes = {
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
)(ProjectDetailsContainer);
