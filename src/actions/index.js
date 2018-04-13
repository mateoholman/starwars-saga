import { call, put } from 'redux-saga/effects'

import * as TYPES from '../types'

export const api = (url) => fetch(url).then(response => response.json())

export const fetchStarWarsRequest = () => ({
    type: TYPES.FETCH_STAR_WARS_REQUEST
})

export const fetchStarshipRequest = () => ({
  type: TYPES.FETCH_STARSHIP_REQUEST
})

export function* fetchPerson(action) {
   try {
      const person = yield call(api, 'https://swapi.co/api/people/');
      yield put({type: TYPES.FETCH_STAR_WARS_SUCCESS, data: person.results});
   } catch (e) {
       console.log(e)
   }
}

export function* fetchStarships(action) {
  try {
    const starship = yield call(api, 'https://swapi.co/api/starships/');
    yield put({ type: TYPES.FETCH_STAR_WARS_SUCCESS, data: starship.results });
  } catch (error) {
    console.log(error);
  }
}
