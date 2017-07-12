import fetch from 'isomorphic-fetch'

const createFetchAction = (
  getURL,
  createLoadingAction,
  createSuccessAction,
  createErrorAction
) => (...args) => dispatch => {
  const url = typeof getURL === 'function' ? getURL(...args) : getURL
  dispatch(createLoadingAction())
  return fetch(url)
    .then(response => response.json())
    .then(json => dispatch(createSuccessAction(json)))
    .catch(error => dispatch(createErrorAction(error)))
}

export default createFetchAction
