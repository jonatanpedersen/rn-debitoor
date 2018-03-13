export const DATA_AVAILABLE = 'DATA_AVAILABLE'
export const FETCHED_REPOSITORIES = 'FETCHED_REPOSITORIES'
export const COUNT_STARS = 'COUNT_STARS'

//Import the sample data
import Data from '../instructions.json'

export function getData () {
  return (dispatch) => {

    //Make API Call
    //For this example, I will be using the sample data in the json file
    //delay the retrieval [Sample reasons only]
    setTimeout(() => {
      const data = Data.instructions
      dispatch({type: DATA_AVAILABLE, data: data})
    }, 500)
  }
}

export function fetchGithubRepositories () {
  return (dispatch) => {
    fetch('https://api.github.com/repositories')
      .then(response => response.json())
      .then(data => dispatch({type: FETCHED_REPOSITORIES, data: data}))
  }
}