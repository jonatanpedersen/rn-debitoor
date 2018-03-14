import { ACCESS_TOKEN } from '../../env'
import { FETCHED_REPOSITORIES, SET_FAVORITE } from '../actions/actionTypes'

export function fetchRepositories () {
  return (dispatch) => {
    fetch(`https://api.github.com/repositories?access_token=${ACCESS_TOKEN}`)
      .then(response => response.json())
      .then(data => {
        data.forEach((repo, index) => {
          fetch(`https://api.github.com/repos/${repo.owner.login}/${repo.name}?access_token=${ACCESS_TOKEN}`)
            .then(response => response.json())
            .then(repo => data[index]['stargazers_count'] = repo.stargazers_count)
        })

        return data
      })
      .then(data => {
        return dispatch({type: FETCHED_REPOSITORIES, data: data})
      })
  }
}

export function setFavorite (item) {
  console.log('here', item.id)
  return (dispatch) => {
    return dispatch({type: SET_FAVORITE, data: item})
  }
}

