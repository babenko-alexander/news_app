import { connect } from 'react-redux';
import NewsStripeSCR from './NewsStripeSCR';

import { setArticle } from '../../store/reducers/activeArticle';
import { unshiftFreshNews } from '../../store/reducers/newsArr';
import { resetFreshNews, updateFreshNews } from '../../store/reducers/freshNewsArr';

function MSTP(state, ownProps) {
  return {
    newsArr: state.newsArr,
    freshNewsArr: state.freshNewsArr,
    authorsArr: state.authorsArr
  };
}

// const MDTP = { setArticle, unshiftFreshNews, resetFreshNews, updateFreshNews };

function MDTP(dispatch) {
  return {
    setArticle: data => dispatch(setArticle(data)),
    unshiftFreshNews: data => dispatch(unshiftFreshNews(data)),
    resetFreshNews: () => dispatch(resetFreshNews()),
    updateFreshNews: data => dispatch(updateFreshNews(data))
  };
}

export default connect(
  MSTP,
  MDTP
)(NewsStripeSCR);