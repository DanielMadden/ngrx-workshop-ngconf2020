import { createAction, props } from "@ngrx/store";
import { UserModel } from "src/app/shared/models";
import { LoginEvent } from "../components/login-form";

export const login = createAction(
  "[Auth] User Login",
  props<{ account: LoginEvent }>()
);

export const logout = createAction("[Auth] User Logout");
