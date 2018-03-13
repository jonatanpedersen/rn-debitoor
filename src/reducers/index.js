import { combineReducers } from 'redux'

import { DATA_AVAILABLE, FETCHED_REPOSITORIES } from '../actions/' //Import the actions types constant we defined in our actions

let dataState = {data: [], loading: true}

const dataReducer = (state = dataState, action) => {
  switch (action.type) {
    case DATA_AVAILABLE:
      state = Object.assign({}, state, {data: action.data, loading: false})
      return state
    default:
      return state
  }
}

let githubState = {data: [], loading: true}

const github = (state = githubState, payload) => {
  switch (payload.type) {
    case FETCHED_REPOSITORIES:
      //payload.data.forEach(repo => console.log(repo.name, repo.owner.login, repo.stargazers_url))
      return Object.assign({}, state, {data: payload.data, loading: false})
    default:
      return state
  }
}

// Combine all the reducers
const rootReducer = combineReducers({
  dataReducer,
  github
})

export default rootReducer