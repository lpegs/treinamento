import React from 'react'
import './genre-corridor.scss'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { corridorConfigs } from '../../utils/corridor'
import { HomeQuery_findAllGenres } from '../../types/HomeQuery'

interface GenreCorridorProps {
  genre: HomeQuery_findAllGenres
  customClass?: string
}

function GenreCorridor(props: GenreCorridorProps) {

  const { genre, customClass } = props

  if (genre.movies.length === 0) {
    return null
  }

  return (
    <div className={ `corridor-container ${ customClass }` }>
      <p>{ genre.title }</p>
      <Carousel responsive={ corridorConfigs }
                infinite={ true }
                removeArrowOnDeviceType={ [ 'mobile', 'tablet' ] }
                className={ 'genre-corridor-movie-list' }
      >
        { genre.movies.map((movie, index) => <div key={ index } className={ 'corridor-movie' }>
          <img src={ movie.image?.url } alt={ movie.image?.name ?? '' } />
        </div>) }
      </Carousel>
    </div>
  )
}

export default GenreCorridor
