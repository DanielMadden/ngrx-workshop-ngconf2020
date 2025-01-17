import { Component } from "@angular/core";
import { Observable, of } from "rxjs";
import { Store } from "@ngrx/store";
import { UserModel } from "src/app/shared/models";
import { AuthUserActions } from "../../actions";
import { LoginEvent } from "../login-form";
import {
  selectAuthError,
  selectAuthStatus,
  selectUser,
  State,
} from "src/app/shared/state";

@Component({
  selector: "app-login-page",
  templateUrl: "./login-page.component.html",
  styleUrls: ["./login-page.component.css"],
})
export class LoginPageComponent {
  gettingStatus$: Observable<boolean>;
  user$: Observable<UserModel | null>;
  error$: Observable<string | null>;

  constructor(private store: Store<State>) {
    this.gettingStatus$ = store.select(selectAuthStatus);
    this.user$ = store.select(selectUser);
    this.error$ = store.select(selectAuthError);
  }

  onLogin($event: LoginEvent) {
    this.store.dispatch(AuthUserActions.login({ account: $event }));
  }
}
