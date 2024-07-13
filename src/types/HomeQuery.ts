/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: HomeQuery
// ====================================================

export interface HomeQuery_movies_image {
  name: string | null;
  url: string;
}

export interface HomeQuery_movies {
  id: string;
  title: string;
  image: HomeQuery_movies_image | null;
  description: string | null;
  type: string;
  genreIds: string[];
  date: string | null;
}

export interface HomeQuery_findAllGenres_movies_image {
  name: string | null;
  url: string;
}

export interface HomeQuery_findAllGenres_movies {
  id: string;
  title: string;
  image: HomeQuery_findAllGenres_movies_image | null;
}

export interface HomeQuery_findAllGenres {
  id: string;
  title: string;
  movies: HomeQuery_findAllGenres_movies[];
}

export interface HomeQuery {
  movies: HomeQuery_movies[];
  findAllGenres: HomeQuery_findAllGenres[];
}
