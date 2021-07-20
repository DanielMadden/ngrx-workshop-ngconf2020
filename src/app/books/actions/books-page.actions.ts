import { createAction, props } from "@ngrx/store";
import { BookRequiredProps } from "src/app/shared/models";

export const enter = createAction("[Books Page] Enter");

export const selectBook = createAction(
  "[Books Page] Select Book",
  props<{ bookId: string }>()
);

export const clearSelectedBook = createAction(
  "[Books Page] Clear Selected Book"
);

export const createBook = createAction(
  "[Books Page] Create Book",
  props<{ book: BookRequiredProps }>()
);

export const updateBook = createAction(
  "[Books Page] Update Book",
  props<{ bookId: string; updates: BookRequiredProps }>()
);

export const deleteBook = createAction(
  "[Books Page] Delete Book",
  props<{ bookId: string }>()
);
/**
 * 
 * - Events in this book app:
  - [Books Page] Create a Book
    - BookRequiredProps
  - [Books Page] Update a Book
    - BookRequiredprops
    - ID of the book being edited
  - [Books Page] Delete a Book
    - ID of the book being deleted
  - [Books Page] Cancel Editing a Book

 * 
 */
