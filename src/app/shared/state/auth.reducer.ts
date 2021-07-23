import { UserModel } from "../models";
import { Action, createReducer, on } from "@ngrx/store";
import { AuthApiActions, AuthUserActions } from "src/app/auth/actions";
import { LoginEvent } from "src/app/auth/components/login-form";

export interface State {
  gettingStatus: boolean;
  user: LoginEvent | null;
  error: string;
}

export const initialState: State = {
  gettingStatus: false,
  user: null,
  error: "",
};

export const authReducer = createReducer(
  initialState,
  on(AuthUserActions.logout, (state, action) => {
    return {
      gettingStatus: false,
      user: null,
      error: "",
    };
  }),
  on(AuthUserActions.login, (state, action) => {
    return {
      gettingStatus: true,
      user: action.account,
      error: "",
    };
  })
);

export function reducer(state: undefined | State, action: Action) {
  return authReducer(state, action);
}
