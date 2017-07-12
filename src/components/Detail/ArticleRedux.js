import createFetchAction from '../../utils/createFetchAction'

const initialState = {
  loading: true,
  error: false,
  article: {}
}

const LOAD_ARTICLE = 'LOAD_ARTICLE'
const LOAD_ARTICLE_SUCCESS = 'LOAD_ARTICLE_SUCCESS'
const LOAD_ARTICLE_ERROR = 'LOAD_ARTICLE_ERROR'

export default function article(state = initialState, action) {
  switch (action.type) {
    case LOAD_ARTICLE: {
      return {
        ...state,
        loading: true,
        error: false
      }
    }

    case LOAD_ARTICLE_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        article: action.payload
      }
    }

    case LOAD_ARTICLE_ERROR: {
      console.log(action.error)
      return {
        ...state,
        loading: false,
        error: true
      }
    }

    default:
      return state
  }
}
// action creators
const loadArticle = () => ({
  type: LOAD_ARTICLE
})

const loadArticleSuccess = payload => ({
  type: LOAD_ARTICLE_SUCCESS,
  payload
})

const loadArticleError = error => ({
  type: LOAD_ARTICLE_ERROR,
  error
})

const getURL = id => `api/article/${id}.json`

export const fetchArticle = createFetchAction(
  getURL,
  loadArticle,
  loadArticleSuccess,
  loadArticleError
)
