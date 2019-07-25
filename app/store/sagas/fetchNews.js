import { call, select, put } from 'redux-saga/effects';
import { fetchNewsAPI } from './api';
import { makeArticlesPure, concatFreshNews, extractAuthors } from './functions';

export default function* fetchNews() {
try {  
  let news = yield call(fetchNewsAPI);
  let pureArticles = yield call(makeArticlesPure, news);
  let newsArr = yield select(state => state.newsArr);
  let freshNewsArr = yield select(state => state.freshNewsArr);
  if (newsArr.length === 0) {
    yield put({ type: 'FETCH_FRESH_NEWS_SUCCESS', data: pureArticles });
  } else {
    yield call(concatFreshNews, pureArticles, newsArr, freshNewsArr);
  }
  // newsArr = yield select(state => state.newsArr);
  // freshNewsArr = yield select(state => state.freshNewsArr);
  let authors = yield call(extractAuthors, newsArr, freshNewsArr);
  yield put({ type: 'FETCH_AUTHORS_SUCCESS', data: authors });
} 
catch(error) {
  yield put({type: 'FETCH_NEWS_FAILURE'});
  yield put({type: 'FETCH_FRESH_NEWS_FAILURE'});
  yield put({type: 'FETCH_AUTHORS_FAILURE'});
  // yield put({type: 'THROW_ERROR_OVERLAY', error});
}
}