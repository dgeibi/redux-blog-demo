import { combineReducers } from 'redux'

import list, * as listActions from '../components/Home/PreviewListRedux'

export default combineReducers({
  list
})

export { listActions }
