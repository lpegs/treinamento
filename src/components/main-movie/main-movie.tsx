import React from 'react'
import GradeRoundedIcon from '@mui/icons-material/GradeRounded'
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded'
import ShareRoundedIcon from '@mui/icons-material/ShareRounded'
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import './main-movie.scss'
import MovieRatings from '../movie-ratings/movie-ratings';
import { HomeQuery_movies } from '../../types/HomeQuery'

interface MainMovieProps {
  movie: HomeQuery_movies
}

function MainMovie(props: MainMovieProps) {

  const { movie } = props

  return (
    <div className={ 'main-movie-container' }>
      <div className={ 'main-movie-poster' }>
        <img src={ movie.image?.url } alt={ movie.title } />
        <div className={ 'main-movie-actions mobile-hidden' }>
          <GradeRoundedIcon className={ 'star' } />
          <FavoriteRoundedIcon className={ 'heart' } />
          <ShareRoundedIcon className={ 'share' } />
        </div>
      </div>
      <div className={ 'main-movie-details' }>
      <h2>{ movie.title }</h2>
        <p className={ 'year' }>{ movie.date }</p>
        <p className={ 'description' }>{ movie.description }</p>
        <button className={ 'play-button mobile-hidden' }>
          <PlayArrowRoundedIcon />
          <p>Play</p>
        </button>
      </div>
      <div className={ 'main-movie-actions desktop-hidden' }>
        <GradeRoundedIcon className={ 'star' } />
        <FavoriteRoundedIcon className={ 'heart' } />
        <ShareRoundedIcon className={ 'share' } />
      </div>
      <button className={ 'play-button desktop-hidden' }>
        <PlayArrowRoundedIcon />
        <p>Play</p>
      </button>
      <MovieRatings />
    </div>
  )
}

export default MainMovie
