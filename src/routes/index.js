import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter as Router } from 'react-router-redux'

import Frame from '../layouts/Frame'
import Home from '../views/Home'
import Detail from '../views/Detail'

const routes = history =>
  <Router history={history}>
    <Frame>
      <Switch>
        <Route path='/detail/:id' component={Detail} />
        <Route path='/' component={Home} />
      </Switch>
    </Frame>
  </Router>

export default routes
