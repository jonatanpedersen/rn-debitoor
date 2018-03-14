import { SET_FAVORITE, GET_FAVORITE } from '../actions/actionTypes'

let initialState = {
  ids: [],
}

const repositories = (state = initialState, payload) => {
  switch (payload.type) {
    case SET_FAVORITE:
      console.log(payload)
      return {
        ...state,
        ids: state.ids.concat(payload.id)
      }
      //return Object.assign({}, state, {data: payload.data})
    case GET_FAVORITE:
      return state.data
    default:
      return state
  }
}

export default repositories
