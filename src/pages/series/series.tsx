import React from 'react'
import './series.scss'
import MovieCorridor from '../../components/movie-corridor/movie-corridor'
import { useQuery } from '@apollo/client'
import { seriesQuery } from './queries'
import { CircularProgress } from '@mui/material'
import { SeriesQuery } from '../../types/SeriesQuery'

export default function Series() {

  const { data, loading, error } = useQuery<SeriesQuery>(seriesQuery)

  if (!data || loading || error) {
    return <div className={ 'series-container' }>
      <CircularProgress />
    </div>
  }

  const movies = data.movieByType

  return (
    <div className={ 'series-container' }>
      <MovieCorridor customClass={ 'series-corridor' } movies={ movies } title={ '' } />
      <MovieCorridor customClass={ 'series-corridor' } movies={ movies } title={ '' } />
      <MovieCorridor customClass={ 'series-corridor' } movies={ movies } title={ '' } />
      <MovieCorridor customClass={ 'series-corridor' } movies={ movies } title={ '' } />
      <MovieCorridor customClass={ 'series-corridor' } movies={ movies } title={ '' } />
      <MovieCorridor customClass={ 'series-corridor' } movies={ movies } title={ '' } />
      <MovieCorridor customClass={ 'series-corridor' } movies={ movies } title={ '' } />
    </div>
  )
}
