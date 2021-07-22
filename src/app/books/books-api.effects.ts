import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { concatMap, exhaustMap, map, mergeMap } from "rxjs/operators";
import { BooksService } from "../shared/services";
import { BooksPageActions, BooksApiActions } from "./actions";

@Injectable()
export class BooksApiEffects {
  constructor(private actions$: Actions, private booksService: BooksService) {}

  // Create the effect
  getAllBooks$ = createEffect(() => {
    // Return an observable
    return this.actions$.pipe(
      // ofType() takes in an observable of actions
      ofType(BooksPageActions.enter),
      // Exhaust map discards any new streams until the current stream finishes
      exhaustMap((action) => {
        // Return an Http Observable
        return (
          this.booksService
            //   Get all books
            .all()
            // Pipe the Http Observable into a map operator that sends the books to the booksLoaded action. This action will trigger the reducer that will then place these books into the state.
            .pipe(map((books) => BooksApiActions.booksLoaded({ books })))
        );
      })
    );
  });

  createBook$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(BooksPageActions.createBook),
      concatMap((action) => {
        return this.booksService
          .create(action.book)
          .pipe(map((book) => BooksApiActions.bookCreated({ book })));
      })
    );
  });

  updateBook$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(BooksPageActions.updateBook),
      concatMap((action) => {
        return this.booksService
          .update(action.bookId, action.updates)
          .pipe(map((book) => BooksApiActions.bookUpdated({ book })));
      })
    );
  });

  deleteBook$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(BooksPageActions.deleteBook),
      mergeMap((action) => {
        return this.booksService
          .delete(action.bookId)
          .pipe(
            map(() => BooksApiActions.bookDeleted({ bookId: action.bookId }))
          );
      })
    );
  });
}
