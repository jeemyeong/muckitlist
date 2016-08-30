import { connect } from 'react-redux'
import NavRoot from '../components/NavRoot'
import Home from '../components/Home'
import { push, pop } from '../actions/navActions'
function mapStateToProps (state) {
  console.log("this is navRootContainer's log start")
  console.log(state)
  console.log("this is navRootContainer's log end")
  return {
    navigation: state.navReducer,
    data: state.foodReducer.data,
    status: state.foodReducer.status,
    loaded: state.foodReducer.loaded,
    currentItem: state.foodReducer.currentItem,
  }
}

export default connect(
  mapStateToProps,
)(NavRoot)

// function mapDispatchToProps (dispatch) {
//   return {
//     pushRoute: (route) => dispatch(push(route)),
//     popRoute: () => dispatch(pop())
//   }
// }
