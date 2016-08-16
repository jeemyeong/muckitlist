import { combineReducers } from 'redux'
import navReducer from './navReducer'
import foodReducer from './foodReducer'

const rootReducer = combineReducers({
  navReducer,
  foodReducer
})

export default rootReducer