import React from 'react'
import MainMovie from '../../components/main-movie/main-movie'
import './home.scss'
import MovieCorridor from '../../components/movie-corridor/movie-corridor'
import { forYouMovies, trendingMovies, youMayLikeMovies } from '../../utils/data'

export interface Movie {
  title: string
  year: number
  image: string
}

function Home() {
  return (
    <div className={ 'home-container' }>
      <MainMovie />
      <div className={ 'divider desktop-hidden' }></div>
      <MovieCorridor movies={ trendingMovies } title={ 'Trending' } />
      <MovieCorridor movies={ forYouMovies } title={ 'For you' } />
      <MovieCorridor movies={ youMayLikeMovies } title={ 'You may like' } />
    </div>
  )
}

export default Home
