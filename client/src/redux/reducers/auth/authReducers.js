import { SIGNUP, SIGNIN, LOGOUT } from "../../type/auth/authTypes";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case SIGNUP:
      return {
        ...state,
        signup: action.payload,
      };

    case SIGNIN:
      return {
        ...state,
        error: action.payload.error,
        message: action.payload.message,
        user: action.payload,
      };

    case LOGOUT:
      return {
        ...state,
        error: undefined,
        message: action.payload,
        user: undefined,
      };

    default:
      return state;
  }
}
