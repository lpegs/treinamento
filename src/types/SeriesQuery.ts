/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SeriesQuery
// ====================================================

export interface SeriesQuery_movieByType_image {
  name: string | null;
  url: string;
}

export interface SeriesQuery_movieByType {
  id: string;
  title: string;
  image: SeriesQuery_movieByType_image | null;
  description: string | null;
  type: string;
  genreIds: string[];
  date: string | null;
}

export interface SeriesQuery {
  movieByType: SeriesQuery_movieByType[];
}
