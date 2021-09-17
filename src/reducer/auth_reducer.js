import { AUTH_USER, LOGOUT, UPDATE_USER } from '../actions'

const auth_reducer = (state, action) => {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, userdata: action.payload }
    case UPDATE_USER:
      return { ...state, userdata: action.payload }
    case LOGOUT:
      return { ...state, userdata: [] }

    default:
      throw new Error(`No Matching "${action.type}" - action type`)
  }
}

export default auth_reducer
