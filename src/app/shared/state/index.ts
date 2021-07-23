import { ActionReducerMap, createSelector, MetaReducer } from "@ngrx/store";
import * as fromAuth from "./auth.reducer";
import * as fromBooks from "./books.reducer";

export interface State {
  books: fromBooks.State;
  auth: fromAuth.State;
}

export const reducers: ActionReducerMap<State> = {
  books: fromBooks.reducer,
  auth: fromAuth.reducer,
};

export const metaReducers: MetaReducer<State>[] = [];

/**
 * Books State
 */

export const selectBooksState = (state: State) => state.books;
export const selectAllBooks = createSelector(
  selectBooksState,
  fromBooks.selectAll
);
export const selectActiveBook = createSelector(
  selectBooksState,
  fromBooks.selectActiveBook
);
export const selectBooksEarningsTotals = createSelector(
  selectBooksState,
  fromBooks.selectEarningsTotals
);

export const selectAuthState = (state: State) => state.auth;
export const selectAuthStatus = createSelector(
  selectAuthState,
  fromAuth.selectStatus
);
export const selectUser = createSelector(selectAuthState, fromAuth.selectUser);
export const selectAuthError = createSelector(
  selectAuthState,
  fromAuth.selectError
);
