import React from 'react'
import GradeRoundedIcon from '@mui/icons-material/GradeRounded'
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded'
import ShareRoundedIcon from '@mui/icons-material/ShareRounded'
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import './main-movie.scss'
import { trendingMovies } from '../../utils/data'
import MovieRatings from '../movie-ratings/movie-ratings';
import { Movie } from '../../pages/home/home'

interface MainMovieProps {
  movie: Movie
}

function MainMovie(props: MainMovieProps) {

  const { movie } = props

  return (
    <div className={ 'main-movie-container' }>
      <div className={ 'main-movie-poster' }>
        <img src={ movie.image } alt={ movie.title } />
        <div className={ 'main-movie-actions mobile-hidden' }>
          <GradeRoundedIcon className={ 'star' } />
          <FavoriteRoundedIcon className={ 'heart' } />
          <ShareRoundedIcon className={ 'share' } />
        </div>
      </div>
      <div className={ 'main-movie-details' }>
      <h2>{ movie.title }</h2>
        <p className={ 'year' }>{ movie.year }</p>
        <p className={ 'description' }>Donec magna quam, aliquet vitae enim at, ultricies dictum leo. Ut a tellus elementum, egestas arcu et, facilisis dolor. Phasellus
          maximus, metus at ultrices cursus, neque lectus egestas augue, nec convallis urna ipsum quis libero. Mauris faucibus tristique bibendum. Vivamus nibh augue, molestie at purus
          mattis, scelerisque consectetur arcu. In at ligula ac turpis rhoncus efficitur quis in urna. Aenean id lobortis sem. Vivamus nibh augue, molestie at purus mattis, scelerisque
          consectetur arcu. In at ligula ac turpis rhoncus efficitur quis in urna. Aenean id lobortis sem. Vivamus nibh augue, molestie at purus mattis, scelerisque consectetur arcu. In
          at ligula ac turpis rhoncus efficitur quis in urna. Aenean id lobortis sem.</p>
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
