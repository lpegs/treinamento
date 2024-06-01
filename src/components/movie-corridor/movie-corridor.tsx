import React from 'react'
import { Movie } from '../../pages/home/home'
import './movie-corridor.scss'

interface MovieCorridorProps {
  movies: Movie[]
  title: string
}

function MovieCorridor(props: MovieCorridorProps) {

  const { movies, title } = props

  return (
    <div className={ 'corridor-container' }>
      <p>{ title }</p>
      <div className={ 'corridor-movie-list desktop-hidden' }>
        { movies.slice(0, 2).map((movie, index) => <div key={ index } className={ 'corridor-movie' }>
          <img src={ movie.image } alt={ movie.title } />
        </div>) }
      </div>
      <div className={ 'corridor-movie-list mobile-hidden' }>
        { movies.slice(0, 5).map((movie, index) => <div key={ index } className={ 'corridor-movie' }>
          <img src={ movie.image } alt={ movie.title } />
        </div>) }
      </div>
    </div>
  )
}

export default MovieCorridor
