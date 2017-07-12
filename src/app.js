import ReactDOM from 'react-dom'
import React from 'react'
import routes from './routes'
import configure from './redux/configure'
import { Provider } from 'react-redux'

const { store, history } = configure()

ReactDOM.render(
  <Provider store={store}>
    {routes(history)}
  </Provider>,
  document.getElementById('root')
)
