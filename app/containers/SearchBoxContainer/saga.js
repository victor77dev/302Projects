import axios from 'axios';
import { takeLatest, call, put } from 'redux-saga/effects';
import { getDataLoaded, getDataError } from 'containers/SearchBoxContainer/actions';
import { GET_DATA } from 'containers/SearchBoxContainer/constants';

// const config = require('../config.json')
const apiUrl = 'https://victor77dev.github.io/projects-data';

export function* getData() {
  try {
    // Get project data
    const project = yield call(axios.get, `${apiUrl}/projectsAllData.json`);
    // Put return value to searchResult
    yield put(getDataLoaded(project.data));
  } catch (err) {
    yield put(getDataError(err));
  }
}

export default function* searchBoxSaga() {
  yield takeLatest(GET_DATA, getData);
}
