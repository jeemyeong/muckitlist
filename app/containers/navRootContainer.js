import { connect } from 'react-redux'
import NavRoot from '../components/NavRoot'
import { push, pop } from '../actions/navActions'
function mapStateToProps (state) {
  console.log(state)
  return {
    navigation: state.navReducer,
    data: state.foodReducer.data,
    status: state.foodReducer.status,
    loaded: state.foodReducer.loaded
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
