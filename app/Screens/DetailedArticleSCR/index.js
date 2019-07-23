import { connect } from 'react-redux';
import DetailedArticleSCR from './DetailedArticleSCR';

import { addNewsOK, addNewsERR } from '../../store/reducers/newsArr';

function MSTP(state) {
  return {
    newsArr: state.newsArr,
    activeArticle: state.activeArticle
  };
}

function MDTP(dispatch) {
  return {
    addNewsOK: data => dispatch(addNewsOK(data)),
    addNewsERR: () => dispatch(addNewsERR())
  };
}

export default connect(
  MSTP,
  MDTP
)(DetailedArticleSCR);