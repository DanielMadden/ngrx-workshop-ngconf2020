import { Component } from "@angular/core";
import { Observable, of } from "rxjs";
import { UserModel } from "src/app/shared/models";
import { Store } from "@ngrx/store";
import { selectUser, State } from "src/app/shared/state";
import { AuthUserActions } from "../../actions";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"],
})
export class UserComponent {
  user$: Observable<UserModel | null>;

  constructor(private store: Store<State>) {
    this.user$ = this.store.select(selectUser);
  }

  onLogout() {
    this.store.dispatch(AuthUserActions.logout());
  }
}
