import { Auth, AuthActions } from "../../types/auth";

const initState: Auth = {
  isAuth: false,
  token: null,
  user: null,
};

export const authReducer = (state = initState, action: AuthActions): Auth => {
  switch (action.type) {
    case "SIGNIN":
      return {
        ...state,
        isAuth: true,
        token: action.token,
        user: action.payload,
      };
    case "SIGNUP":
      return {
        ...state,
        isAuth: true,
        token: action.token,
        user: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        isAuth: false,
      };
    default:
      return state;
  }
};
