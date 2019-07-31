import { connect } from 'react-redux';
import Indicator from './Indicator';

function mapStateToProps(state) {
  return {
    loading: state.loading
  };
}

export default connect(mapStateToProps)(Indicator);
