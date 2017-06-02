import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/counter.actions';
// import { increment as incr, decrement as decr } from '../actions/counter.actions';
import Counter from '../components/Counter';

function mapStateToProps(state) {
    return {
        count: state
    };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

// function mapDispatchToProps(dispatch) {
//   return {
//       increment(amount) { dispatch(incr(amount)) },
//       decrement(amount) { dispatch(decr(amount)) }
//   }
// }



const CounterContainer = connect(
    mapStateToProps, 
    mapDispatchToProps
)(Counter);

export default CounterContainer;