import { ACCESS_TOKEN } from '../../env'
import { FETCH_REPOSITORIES, SET_FAVORITE, FETCH_PULLS } from '../actions/actionTypes'

export function fetchRepositories (language) {
  return (dispatch) => {
    //fetch(`https://api.github.com/repositories?access_token=${ACCESS_TOKEN}`)
    fetch(`https://api.github.com/search/repositories?q=language:${language}&sort=stars&access_token=${ACCESS_TOKEN}`)
      .then(response => response.json())
      .then((data) => {
        return dispatch({type: FETCH_REPOSITORIES, data: data.items})
      })
  }
}

export function setFavorite (item) {
  return (dispatch) => {
    return dispatch({type: SET_FAVORITE, id: item.id})
  }
}

export function getPulls (url) {
  return (dispatch) => {
    fetch(`${url.split('{')[0]}?access_token=${ACCESS_TOKEN}`)
      .then(response => response.json())
      .then(data => dispatch({type: FETCH_PULLS, data: data})
      )
  }
}

