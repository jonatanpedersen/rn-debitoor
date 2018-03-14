import { combineReducers } from 'redux'

import repositories from './repositories'
import favorites from './favorites'
import pulls from './pulls'


// Combine all the reducers
const rootReducer = combineReducers({
  repositories,
  favorites,
  pulls
})

export default rootReducer