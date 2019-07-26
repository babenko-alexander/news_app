import { connect } from 'react-redux';
import Indicator from './Indicator';

function mapStateToProps(state) {
  return {
    indicator: state.indicator
  };
}

export default connect(mapStateToProps)(Indicator);
