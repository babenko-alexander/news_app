import { connect } from 'react-redux';
import WelcomeSCR from './WelcomeSCR.js';

import { addNewsOK, addNewsERR } from '../../store/reducers/newsArr';
import { addAuthorsOK, addAuthorsERR } from '../../store/reducers/authorsArr';
import { addFreshNewsOK, addFreshNewsERR } from '../../store/reducers/freshNewsArr';

function MSTP(state) {
  return {
    newsArr: state.newsArr,
    freshNewsArr: state.freshNewsArr,
    authorsArr: state.authorsArr
  };
}

function MDTP(dispatch) {
  return {
    addNewsOK: data => dispatch(addNewsOK(data)),
    addNewsERR: () => dispatch(addNewsERR()),
    addAuthorsOK: data => dispatch(addAuthorsOK(data)),
    addAuthorsERR: () => dispatch(addAuthorsERR()),
    addFreshNewsOK: data => dispatch(addFreshNewsOK(data)),
    addFreshNewsERR: () => dispatch(addFreshNewsERR())
  };
}

export default connect(
  MSTP,
  MDTP
)(WelcomeSCR);