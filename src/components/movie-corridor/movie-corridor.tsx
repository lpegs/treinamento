import React from 'react'
import './movie-corridor.scss'
import { HomeQuery_movies } from '../../types/HomeQuery'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { corridorConfigs } from '../../utils/corridor'
import { useNavigate } from 'react-router-dom'

interface MovieCorridorProps {
  movies: HomeQuery_movies[]
  title: string
  customClass?: string
}

function MovieCorridor(props: MovieCorridorProps) {

  const { movies, title, customClass } = props

  const navigate = useNavigate()

  return (
    <div className={ `corridor-container ${ customClass }` }>
      <p>{ title }</p>
      <Carousel responsive={ corridorConfigs }
                infinite={ true }
                removeArrowOnDeviceType={ [ 'mobile', 'tablet' ] }
                className={ 'corridor-movie-list' }
      >
        { movies.map((movie, index) => <div key={ index } className={ 'corridor-movie' }>
          <img src={ movie.image?.url } alt={ movie.title } draggable={ false } onClick={ () => navigate(`/movie/${ movie.id }`) } />
        </div>) }
      </Carousel>
    </div>
  )
}

export default MovieCorridor
