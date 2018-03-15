import { ACCESS_TOKEN } from '../../env'
import { FETCH_REPOSITORIES, SET_FAVORITE, FETCH_PULLS } from '../actions/actionTypes'

/**
 * Fetch repositories from the Github api by language
 * @param language
 * @returns {function(*): Promise<any>}
 */
export function fetchRepositories (language) {
  return (dispatch) => fetch(`https://api.github.com/search/repositories?q=language:${language}&sort=stars&access_token=${ACCESS_TOKEN}`)
    .then(response => response.json())
    .then((data) => dispatch({type: FETCH_REPOSITORIES, data: data.items}))

}

/**
 * Set a repository as favorite
 * @param item
 * @returns {function(*): *}
 */
export function setFavorite (item) {
  return (dispatch) => dispatch({type: SET_FAVORITE, id: item.id})
}

/**
 * Fetch pull requests based on the url for a repository/pulls
 * @param url
 * @returns {function(*): Promise<any>}
 */
export function getPulls (url) {
  return (dispatch) => fetch(`${url.split('{')[0]}?access_token=${ACCESS_TOKEN}`)
    .then(response => response.json())
    .then(data => dispatch({type: FETCH_PULLS, data: data})
    )
}

