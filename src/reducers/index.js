import { combineReducers } from 'redux'
import * as TYPES from '../types'

const initialState = {
    people: [],
    starships: []
}

const handleStarWarsFetchSuccess = (state, action) => {
    return {
        ...state,
        people : action.data
    }
}

const handleStarshipFetchSuccess = (state, action) => {
  return {
    ...state,
    starships: action.data
  }
}

const starWars = (state = initialState, action) => {
    const handlers = {
        [TYPES.FETCH_STAR_WARS_SUCCESS]: handleStarWarsFetchSuccess,
        [TYPES.FETCH_STARSHIP_REQUEST]: handleStarshipFetchSuccess
    }
    return handlers[action.type]
        ? handlers[action.type](state, action)
        : state
}

const rootReducer = combineReducers({
  starWars
})

export default rootReducer
