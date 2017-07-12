import { combineReducers } from 'redux'

import article, * as articleAction from '../components/Detail/ArticleRedux'

export default combineReducers({ article })
export { articleAction }
