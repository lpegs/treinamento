import './movie.scss'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { movieQuery } from './queries'
import { MovieQuery, MovieQueryVariables } from '../../types/MovieQuery'
import GradeRoundedIcon from '@mui/icons-material/GradeRounded'
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded'
import ShareRoundedIcon from '@mui/icons-material/ShareRounded'
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded'
import MovieRatings from '../../components/movie-ratings/movie-ratings'
import { CircularProgress } from '@mui/material'

export default function Movie() {
  const { id } = useParams()
  const navigate = useNavigate()

  const { data, loading } = useQuery<MovieQuery, MovieQueryVariables>(movieQuery, { variables: { id } })

  if (!data || loading) {
    return <CircularProgress />
  }

  const movie = data.movieById

  if (!movie) {
    navigate('/')
    return null
  }

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
