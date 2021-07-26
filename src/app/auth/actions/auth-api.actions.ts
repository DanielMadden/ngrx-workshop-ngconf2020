import { createAction, props } from "@ngrx/store";
import { UserModel } from "src/app/shared/models";

export const getStatusSuccess = createAction(
  "[Auth API] Status Success",
  props<{ user: UserModel | null }>()
);

export const loginSuccess = createAction(
  "[Auth API] Login Success",
  props<{ user: UserModel }>()
);

export const loginFailure = createAction(
  "[Auth API] Login Failure",
  props<{ error: string }>()
);
