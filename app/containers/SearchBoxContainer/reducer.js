/*
 *
 * SearchBoxContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  UPDATE_TEXT,
  SET_TARGET,
  GET_DATA_LOADED,
  GET_DATA_ERROR,
} from './constants';

const initialState = fromJS({
  text: '',
  searchTarget: null,
  searchResult: null,
  searchError: null,
});

function searchBoxContainerReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_TEXT:
      return state
        .set('text', action.text);
    case SET_TARGET:
      return state
        .set('searchTarget', action.target);
    case GET_DATA_LOADED:
      return state
        .set('searchResult', action.result);
    case GET_DATA_ERROR:
      return state
        .set('searchResult', null)
        .set('searchError', action.error);
    default:
      return state;
  }
}

export default searchBoxContainerReducer;
