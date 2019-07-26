import { connect } from 'react-redux';
import ErrorModal from './ErrorModal';

import { turnErrorOFF } from '../../store/reducers/error';

function mapStateToProps(state) {
  return {
    error: state.error
  };
}

function mapDispatchToProps(dispatch) {
  return {
    turnErrorOFF: () => dispatch(turnErrorOFF())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ErrorModal);
