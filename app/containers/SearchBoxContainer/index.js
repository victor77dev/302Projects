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

import { makeSelectSearchBoxText } from './selectors';
import { updateText, searchPaper } from './actions';
import reducer from './reducer';
import saga from './saga';

export class SearchBoxContainer extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  onChange = this.props.onChangeText;
  onKeyPress = (event) => {
    const { history, callSearchPaper, text } = this.props;
    if (event.key === 'Enter') {
      callSearchPaper(text);
      if (history) {
        history.push(`/searchResult/${text}`);
      }
    }
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
  callSearchPaper: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired,
  history: PropTypes.object,
  text: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  text: makeSelectSearchBoxText(),
});

function mapDispatchToProps(dispatch) {
  return {
    onChangeText: (event) => {
      dispatch(updateText(event.target.value));
    },
    callSearchPaper: (text) => {
      dispatch(searchPaper(text));
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
