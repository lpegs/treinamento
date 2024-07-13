import { gql } from '@apollo/client'

export const movieQuery = gql`
    query MovieQuery($id: ID) {
      movieById(id: $id) {
        id
        title
        image {
          url
          name
        }
        date
        description
      }
    }
`
