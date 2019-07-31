import { call, select, put, all } from 'redux-saga/effects';
import { fetchNewsAPI } from './api';
import { articlesMapper, concatFreshNews, extractAuthors } from './functions';

export default function* fetchNews() {
try {  
  let news = yield call(fetchNewsAPI);
  let pureArticles = yield call(articlesMapper, news);
  let freshNewsArr = yield select(state => state.freshNewsArr);
  let newsArr = yield select(state => state.newsArr);
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
    yield all([
      put({type: 'FETCH_NEWS_FAILURE'}),
      put({type: 'FETCH_FRESH_NEWS_FAILURE'}),
      put({type: 'FETCH_AUTHORS_FAILURE'}),
      put({type: 'ERROR_ON', error})
    ])
  }
}