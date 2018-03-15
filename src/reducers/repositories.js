import { FETCH_REPOSITORIES } from '../actions/actionTypes'

let initialState = {
  loading: true,
  data: [],
}

const repositories = (state = initialState, payload) => {
  switch (payload.type) {
    case FETCH_REPOSITORIES:
      return Object.assign({}, state, {data: payload.data, loading: false})
    default:
      return state
  }
}

export default repositories
