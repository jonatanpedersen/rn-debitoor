import { SET_FAVORITE } from '../actions/actionTypes'

let initialState = {
  data: [],
}

const repositories = (state = initialState, payload) => {
  switch (payload.type) {
    case SET_FAVORITE:
      return Object.assign({}, state, {data: payload.data})
    default:
      return state
  }
}

export default repositories
