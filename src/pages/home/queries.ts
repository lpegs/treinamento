import { gql } from '@apollo/client'

export const homeQuery = gql`
  query HomeQuery {
    movies {
      id
      title
      image {
        name
        url
      }
      description
      type
      genreIds
      date
    }
    findAllGenres {
      id
      title
      movies {
        id
        title
        image {
          name
          url
        }
      }
    }
  }
`
