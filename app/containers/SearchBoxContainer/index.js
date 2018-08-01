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

    const isTagKey = tagKeyList.similarList.length > 0;
    const isProjectKey = projectKeyList.similarList.length > 0;
    callSetSearchTarget(null);
    // If exact Tag / Project found
    if (projectKeyList.exact !== null) {
      return history.push({
        pathname: `/project/${projectKeyList.exact}`,
        state: { tags: tagKeyList, projects: projectKeyList, exact: true, target: searchTarget },
      });
    }
    if (tagKeyList.exact !== null) {
      return history.push({
        pathname: `/tag/${tagKeyList.exact}`,
        state: { tags: tagKeyList, projects: projectKeyList, exact: true, target: searchTarget },
      });
    }
    // If no exact Tag / Project found
    if (isTagKey) {
      return history.push({
        pathname: `/tag/${tagKeyList.similarList[0]}`,
        state: { tags: tagKeyList, projects: projectKeyList, exact: false, target: searchTarget },
      });
    }
    if (isProjectKey) {
      return history.push({
        pathname: `/project/${projectKeyList.similarList[0]}`,
        state: { tags: tagKeyList, projects: projectKeyList, exact: false, target: searchTarget },
      });
    }
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
    let exact = null;
    const ignoreRegex = new RegExp('[-_ ]', 'g');
    const formatTarget = target.replace(ignoreRegex, '').toUpperCase();
    const similarList = inputList.reduce((list, key) => {
      const formatKey = key.replace(ignoreRegex, '').toUpperCase();
      exact = formatKey === formatTarget ? key : exact;
      if (formatKey.indexOf(formatTarget) !== -1) {
        list.push(key);
      }
      return list;
    }, []);
    similarList.sort((str1, str2) => {
      const formatStr1 = str1.replace(ignoreRegex, '').toUpperCase();
      const formatStr2 = str2.replace(ignoreRegex, '').toUpperCase();
      const score1 = (formatStr1.indexOf(formatTarget) * 5) + formatStr1.replace(formatTarget, '').length;
      const score2 = (formatStr2.indexOf(formatTarget) * 5) + formatStr2.replace(formatTarget, '').length;
      return score1 > score2;
    });
    return { similarList, exact };
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
