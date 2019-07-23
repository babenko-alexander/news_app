import { combineReducers } from 'redux';

import newsArr from './newsArr';
import freshNewsArr from './freshNewsArr';
import filterValues from './filterValues';
import activeArticle from './activeArticle';
import authorsArr from './authorsArr';

export default combineReducers({
  newsArr,
  freshNewsArr,
  authorsArr,
  filterValues,
  activeArticle
});