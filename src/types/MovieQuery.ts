/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: MovieQuery
// ====================================================

export interface MovieQuery_movieById_image {
  url: string;
  name: string | null;
}

export interface MovieQuery_movieById {
  id: string;
  title: string;
  image: MovieQuery_movieById_image | null;
  date: string | null;
  description: string | null;
}

export interface MovieQuery {
  movieById: MovieQuery_movieById | null;
}

export interface MovieQueryVariables {
  id?: string | null;
}
