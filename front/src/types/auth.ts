export interface Auth {
  isAuth: boolean;
  token: null | string;
  user: null | User;
}

export interface User {
    name: string;
    uid: string;
    photo_url: string;
    friend_count: number;
};

export const SIGNIN = "SIGNIN";
export const SIGNUP = "SIGNUP";
export const LOGOUT = "LOGOUT";

interface SIGINACTION {
  type: typeof SIGNIN;
  token: string
  payload: User;
}

interface SIGUPACTION {
  type: typeof SIGNUP;
  token: string
  payload: User;
}

interface LOGOUTACTION {
  type: typeof LOGOUT;
}

export type AuthActions = SIGINACTION | SIGUPACTION | LOGOUTACTION;
