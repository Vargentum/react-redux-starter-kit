import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './rootReducer'
import { routerMiddleware } from 'react-router-redux'
import createSagaMiddleware from 'redux-saga'
import * as sagas from 'sagas'
import runAllSagas from 'redux/utils/runAllSagas'

export default function configureStore (initialState = {}, history) {
  const sagaMiddleware = createSagaMiddleware()
  // Compose final middleware and use devtools in debug environment
  let middleware = applyMiddleware(sagaMiddleware, routerMiddleware(history))
  if (__DEBUG__) {
    const devTools = window.devToolsExtension
      ? window.devToolsExtension()
      : require('containers/DevTools').default.instrument()
    middleware = compose(middleware, devTools)
  }

  // Create final store and subscribe router in debug env ie. for devtools
  const store = createStore(rootReducer, initialState, middleware)

  runAllSagas(sagaMiddleware.run, sagas)

  if (module.hot) {
    module.hot.accept('./rootReducer', () => {
      const nextRootReducer = require('./rootReducer').default

      store.replaceReducer(nextRootReducer)
    })
  }
  return store
}
