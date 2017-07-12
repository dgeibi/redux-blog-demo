import { createStore, combineReducers, applyMiddleware } from 'redux'
import {
  routerReducer,
  routerMiddleware as createRouterMiddleware
} from 'react-router-redux'
import ThunkMiddleware from 'redux-thunk'
import createHistory from 'history/createHashHistory'
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction'
import rootReducer from './reducers'

const history = createHistory()

const RouterMiddleware = createRouterMiddleware(history)

const finalCreateStore = composeWithDevTools(
  applyMiddleware(ThunkMiddleware, RouterMiddleware)
)(createStore)

const reducer = combineReducers({
  ...rootReducer,
  routing: routerReducer
})

export default function configure(initalState) {
  const store = finalCreateStore(reducer, initalState)
  return { store, history }
}
