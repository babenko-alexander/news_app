import { takeLatest } from 'redux-saga/effects';

import fetchNews from './fetchNews';

function* rootSaga() {
  yield takeLatest('FETCH_NEWS_REQUEST', fetchNews);
}

export default rootSaga;