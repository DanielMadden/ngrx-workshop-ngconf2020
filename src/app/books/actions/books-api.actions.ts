import { createAction, props } from "@ngrx/store";
import { BookModel } from "src/app/shared/models";

export const booksLoaded = createAction(
  "[Books API] Books Loaded Success",
  props<{ books: BookModel[] }>()
);

export const updateBook = createAction(
  "[Books API] Book Updated",
  props<{ book: BookModel }>()
);

export const createBook = createAction(
  "[Books API] Book Created",
  props<{ book: BookModel }>()
);

export const deleteBook = createAction(
  "[Books API] Book Deleted",
  props<{ bookId: string }>()
);
