import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/counter.actions';
import Counter from '../components/Counter';

// what props do we want our component (the one being wrapped, aka counter)
// to get from the state?
function mapStateToProps(state) {
  return {
    count: state
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}


// be default, dispatch get directly passed to the component.
// But that is very broad, the component could dipatch **anything**.
// So, we limit what props (functions) we want our component (the one being wrapped, aka counter)
// to actually be able to call
// function mapDispatchToProps(dispatch) {
//   return {
//     increment() {
//       dispatch(increment());
//     },
//     decrement() {
//       dispatch(decrement());
//     }
//   };
// }


// pass the options to the connection function.
// Then, the return function is used to wrap out Counter component
const CounterContainer = connect(
  /* options here */
  mapStateToProps, 
  mapDispatchToProps
)(
  /* wrapped component goes here */
  Counter
);

// export the wrapper
export default CounterContainer;
