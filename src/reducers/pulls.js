import { FETCH_PULLS, RESET_PULLS } from '../actions/actionTypes'

let initialState = {
  loading: true,
  data: [],
}

const pulls = (state = initialState, payload) => {
  switch (payload.type) {
    case FETCH_PULLS:
      return {data: payload.data, loading: false}
    case RESET_PULLS:
      return initialState
    default:
      return state
  }
}

export default pulls
