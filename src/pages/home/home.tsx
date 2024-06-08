import React, { Fragment, useEffect, useRef, useState } from 'react'
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

  const [ activeMovie, setActiveMovie ] = useState<Movie>(trendingMovies[Math.floor(Math.random() * trendingMovies.length)])

  return (
    <div className={ 'home-container' }>
      <MainMovie movie={ activeMovie } />
      <div className={ 'divider desktop-hidden' }></div>
      <MovieCorridor movies={ trendingMovies } title={ 'Trending' } customClass={ 'orange' } />
      <MovieCorridor movies={ forYouMovies } title={ 'For you' } />
      <MovieCorridor movies={ youMayLikeMovies } title={ 'You may like' } />
    </div>
  )
}

export default Home
