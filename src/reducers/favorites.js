import { SET_FAVORITE } from '../actions/actionTypes'

let initialState = {
  ids: [],
}

const repositories = (state = initialState, payload) => {
  return (payload.type === 'SET_FAVORITE' && !state.ids.includes(payload.id)) 
      ? {...state, ids: state.ids.concat(payload.id)}
      : state;
}

export default repositories
