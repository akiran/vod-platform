import {post} from './utils/network'

const UPDATE_USER = 'UPDATE_USER'

export function signUp(data) {
  return function(dispatch) {
    return post('/api/users/register', data)
  }
}

export function signIn(data) {
  return function(dispatch) {
    return post('/api/users/login', data)
  }
}

export default function user(state = {}, action) {
  const {type, payload} = action
  switch(type) {
    case UPDATE_USER: return ({...state, ...payload})
    default: return state
  }
}
