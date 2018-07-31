/*
 *
 * SearchBoxContainer actions
 *
 */

import {
  UPDATE_TEXT,
  SET_TARGET,
  GET_DATA,
  GET_DATA_LOADED,
  GET_DATA_ERROR,
} from './constants';

export function updateText(text) {
  return {
    type: UPDATE_TEXT,
    text,
  };
}

export function setSearchTarget(target) {
  return {
    type: SET_TARGET,
    target,
  };
}

export function getData(text) {
  return {
    type: GET_DATA,
    text,
  };
}

export function getDataLoaded(result) {
  return {
    type: GET_DATA_LOADED,
    result,
  };
}

export function getDataError(error) {
  return {
    type: GET_DATA_ERROR,
    error,
  };
}
