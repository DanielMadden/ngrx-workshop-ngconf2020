import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import {
  catchError,
  concatMap,
  exhaust,
  exhaustMap,
  map,
} from "rxjs/operators";
import { BooksPageActions } from "../books/actions";
import { AuthService } from "../shared/services/auth.service";
import { AuthApiActions, AuthUserActions } from "./actions";

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private authService: AuthService) {}

  getAuthStatus$ = createEffect(() => {
    return this.actions$.pipe(
      // ofType(BooksPageActions.enter)),
      exhaustMap(() => {
        return this.authService
          .getStatus()
          .pipe(map((user) => AuthApiActions.getStatusSuccess({ user })));
      })
    );
  });

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthUserActions.login),
      concatMap((action) => {
        return this.authService
          .login(action.account.username, action.account.password)
          .pipe(
            map((user) => AuthApiActions.loginSuccess({ user }))
            // catchError((error) => {
            //   AuthApiActions.loginFailure({ error });
            // //   return of([]);
            // })
          );
      })
    );
  });

  //   logout$ = createEffect(()=>{
  //       return this.actions$.pipe(
  //           ofType(AuthUserActions.logout),
  //           exhaustMap((action)=>{
  //               return this.authService.logout()
  //           })
  //       )
  //   })
}
