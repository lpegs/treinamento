import React from 'react'
import MainMovie from '../../components/main-movie/main-movie'
import './home.scss'
import MovieCorridor from '../../components/movie-corridor/movie-corridor'
import { useQuery } from '@apollo/client'
import { homeQuery } from './queries'
import { CircularProgress } from '@mui/material'
import { HomeQuery } from '../../types/HomeQuery'
import GenreCorridor from '../../components/genre-corridor/genre-corridor'

function Home() {
  const { data, loading, error } = useQuery<HomeQuery>(homeQuery)

  if (!data || loading || error) {
    return <div className={ 'home-loading-container' }>
      <CircularProgress />
    </div>
  }

  const movies = data.movies
  const genres = data.findAllGenres

  const activeMovie = movies[Math.floor(Math.random() * movies.length)]

  return (
    <div className={ 'home-container' }>
      <MainMovie movie={ activeMovie } />
      <div className={ 'divider desktop-hidden' }></div>
      <MovieCorridor movies={ movies } title={ 'Trending' } />
      { genres.map((genre) => <GenreCorridor genre={ genre } />) }
    </div>
  )
}

export default Home
