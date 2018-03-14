import { SET_FAVORITE } from '../actions/actionTypes'

let initialState = {
  ids: [],
}

const repositories = (state = initialState, payload) => {
  switch (payload.type) {
    case SET_FAVORITE:
      return {
        ...state,
        ids: state.ids.concat(payload.id)
      }
    default:
      return state
  }
}

export default repositories
