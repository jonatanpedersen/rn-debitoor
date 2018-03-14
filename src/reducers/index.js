import { combineReducers } from 'redux'

import repositories from './repositories'
import favorites from './favorites'

import { DATA_AVAILABLE } from '../actions/actionTypes'

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

// Combine all the reducers
const rootReducer = combineReducers({
  dataReducer,
  repositories,
  favorites
})

export default rootReducer