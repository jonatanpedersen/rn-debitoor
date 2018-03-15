import { SET_FAVORITE } from '../actions/actionTypes'

let initialState = {
  ids: [],
}

const repositories = (state = initialState, payload) => {
  switch (payload.type) {
    case SET_FAVORITE:
      if (state.ids.includes(payload.id) === false) {
        return {...state, ids: state.ids.concat(payload.id)}
      }
      return state
    default:
      return state
  }
}

export default repositories
