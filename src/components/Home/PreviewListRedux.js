import createFetchAction from '../../utils/createFetchAction'

const initialState = {
  loading: true,
  error: false,
  articleList: []
}

const LOAD_ARTICLE_LIST = 'LOAD_ARTICLE_LIST'
const LOAD_ARTICLE_LIST_SUCCESS = 'LOAD_ARTICLE_LIST_SUCCESS'
const LOAD_ARTICLE_LIST_ERROR = 'LOAD_ARTICLE_LIST_ERROR'

// reducer
function previewList(state = initialState, action) {
  switch (action.type) {
    case LOAD_ARTICLE_LIST: {
      return {
        ...state,
        loading: true,
        error: false
      }
    }

    case LOAD_ARTICLE_LIST_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        articleList: action.json.articleList
      }
    }

    case LOAD_ARTICLE_LIST_ERROR: {
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
function loadArticles() {
  return {
    type: LOAD_ARTICLE_LIST
  }
}

function loadArticlesSuccess(json) {
  return {
    type: LOAD_ARTICLE_LIST_SUCCESS,
    json
  }
}

function loadArticlesFail(error) {
  return {
    type: LOAD_ARTICLE_LIST_ERROR,
    error
  }
}

export const fetchArticles = createFetchAction(
  '/api/articles.json',
  loadArticles,
  loadArticlesSuccess,
  loadArticlesFail
)

export default previewList
