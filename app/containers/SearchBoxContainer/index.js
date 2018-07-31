/**
 *
 * SearchBoxContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import SearchBox from 'components/SearchBox';

import { makeSelectSearchBoxText, makeSelectSearchResult, makeSelectSearchTarget } from './selectors';
import { updateText, getData, setSearchTarget } from './actions';
import reducer from './reducer';
import saga from './saga';

export class SearchBoxContainer extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    const { callGetData, text } = props;
    callGetData(text);
  }

  componentWillUpdate(nextProps) {
    const { history, projectData, searchTarget, callSetSearchTarget } = nextProps;
    if (searchTarget === null) return null;
    if (projectData === null) return history.push('/NotFound/data');
    const { tags, projects } = projectData;
    const tagKeyList = this.getSimilarList(Object.keys(tags).map((index) => tags[index].tag), searchTarget);
    const projectKeyList = this.getSimilarList(Object.keys(projects), searchTarget);

    const isTagKey = tagKeyList.length > 0;
    const isProjectKey = projectKeyList.length > 0;
    callSetSearchTarget(null);
    if (isTagKey) return history.push(`/tag/${tagKeyList[0]}`);
    if (isProjectKey) return history.push(`/project/${projectKeyList[0]}`);
    if (!isProjectKey && !isTagKey) return history.push('/NotFound/project');
    return true;
  }

  onChange = this.props.onChangeText;
  onKeyPress = (event) => {
    const { text, callSetSearchTarget } = this.props;
    if (event.key === 'Enter') {
      return callSetSearchTarget(text);
    }
    return false;
  }

  getSimilarList(inputList, target) {
    return inputList.reduce((list, key) => {
      const ignoreRegex = new RegExp('[-_ ]', 'g');
      const formatKey = key.replace(ignoreRegex, '').toUpperCase();
      const formatTarget = target.replace(ignoreRegex, '').toUpperCase();
      if (formatKey.indexOf(formatTarget) !== -1) {
        list.push(key);
      }
      return list;
    }, []);
  }

  render() {
    const { theme } = this.props;
    return (
      <SearchBox theme={theme} onChange={this.onChange} onKeyPress={this.onKeyPress} />
    );
  }
}

SearchBoxContainer.propTypes = {
  onChangeText: PropTypes.func.isRequired,
  callGetData: PropTypes.func.isRequired,
  callSetSearchTarget: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired,
  history: PropTypes.object,
  text: PropTypes.string,
  projectData: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  text: makeSelectSearchBoxText(),
  projectData: makeSelectSearchResult(),
  searchTarget: makeSelectSearchTarget(),
});

function mapDispatchToProps(dispatch) {
  return {
    onChangeText: (event) => {
      dispatch(updateText(event.target.value));
    },
    callGetData: (text) => {
      dispatch(getData(text));
    },
    callSetSearchTarget: (target) => {
      dispatch(setSearchTarget(target));
    },
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'searchBoxContainer', reducer });
const withSaga = injectSaga({ key: 'searchBoxContainer', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(SearchBoxContainer);
