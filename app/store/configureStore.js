import { createStore, applyMiddleware } from 'redux';  
import thunk from 'redux-thunk';  
import rootReducer from '../reducers'

export default function configureStore () {
  const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);  
  const store = createStoreWithMiddleware(rootReducer)

if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('../reducers/index').default
      store.replaceReducer(nextRootReducer)
    })
  }
  return store
}