import { connect } from 'react-redux';
import Topstories from '../components/topstories';
import getTopstories from '../actions/topstories';

function mapStateToProps(state) {
  return {
    topstories: state.topstories,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onGetTopstories: () => dispatch(getTopstories()),
  };
}

const inviteContainer = connect(mapStateToProps, mapDispatchToProps)(Topstories);


export default inviteContainer;
