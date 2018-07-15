/**
 *
 * SearchResultContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import SearchResult from 'components/SearchResult/Loadable';
import { updateText, searchPaper } from 'containers/SearchBoxContainer/actions';

import { makeSelectSearchResult, makeSelectSearchError } from './selectors';
import reducer from './reducer';
import saga from './saga';

export class SearchResultContainer extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.goToPath = this.goToPath.bind(this);
  }

  componentDidMount() {
    const { match, searchText } = this.props;
    const { text } = match.params;
    if (text !== searchText && searchText === '') {
      this.updateSearchResult(text);
    }
  }

  componentWillUpdate(nextProps) {
    const { searchText } = this.props;
    const { match } = nextProps;
    const { params } = match;
    const { text } = params;
    if (text !== searchText && searchText === '') {
      this.updateSearchResult(text);
    }
  }

  goToPath(path) {
    const { history } = this.props;
    history.push(path);
  }

  render() {
    const { searchResult } = this.props;
    return (
      <div>
        <Helmet>
          <title>Search Result</title>
          <meta name="description" content="Search Result" />
        </Helmet>
        <SearchResult
          searchResult={searchResult}
          goToPath={this.goToPath}
        />
      </div>
    );
  }
}

SearchResultContainer.propTypes = {
  searchText: PropTypes.string,
  searchResult: PropTypes.array,
  history: PropTypes.object,
  match: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  searchResult: makeSelectSearchResult(),
  searchError: makeSelectSearchError(),
});

function mapDispatchToProps(dispatch) {
  return {
    updateTextAction: (text) => {
      dispatch(updateText(text));
    },
    callSearchPaper: (text) => {
      dispatch(searchPaper(text));
    },
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'searchResultContainer', reducer });
const withSaga = injectSaga({ key: 'searchResultContainer', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(SearchResultContainer);
