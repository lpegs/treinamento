import { gql } from '@apollo/client'

export const seriesQuery = gql`
    query SeriesQuery {
      movieByType(type: "SERIE") {
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
    }
`
