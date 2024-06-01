import GradeRoundedIcon from '@mui/icons-material/GradeRounded'
import React from 'react'

function MovieRatings() {
  return (
    <div className={ 'main-movie-ratings mobile-hidden' }>
      <div className={ 'main-movie-rating-container' }>
        <div className={ 'main-movie-rating-stars' }>
          <GradeRoundedIcon className={ 'star active' } />
          <GradeRoundedIcon className={ 'star active' } />
          <GradeRoundedIcon className={ 'star active' } />
          <GradeRoundedIcon className={ 'star active' } />
          <GradeRoundedIcon className={ 'star' } />
        </div>
        <p>Direção</p>
      </div>
      <div className={ 'main-movie-rating-container' }>
        <div className={ 'main-movie-rating-stars' }>
          <GradeRoundedIcon className={ 'star active' } />
          <GradeRoundedIcon className={ 'star active' } />
          <GradeRoundedIcon className={ 'star active' } />
          <GradeRoundedIcon className={ 'star' } />
          <GradeRoundedIcon className={ 'star' } />
        </div>
        <p>Imagem</p>
      </div>
      <div className={ 'main-movie-rating-container' }>
        <div className={ 'main-movie-rating-stars' }>
          <GradeRoundedIcon className={ 'star active' } />
          <GradeRoundedIcon className={ 'star active' } />
          <GradeRoundedIcon className={ 'star' } />
          <GradeRoundedIcon className={ 'star' } />
          <GradeRoundedIcon className={ 'star' } />
        </div>
        <p>Roteiro</p>
      </div>
      <div className={ 'main-movie-rating-container' }>
        <div className={ 'main-movie-rating-stars' }>
          <GradeRoundedIcon className={ 'star active' } />
          <GradeRoundedIcon className={ 'star active' } />
          <GradeRoundedIcon className={ 'star active' } />
          <GradeRoundedIcon className={ 'star active' } />
          <GradeRoundedIcon className={ 'star active' } />
        </div>
        <p>Atuação</p>
      </div>
      <div className={ 'main-movie-rating-container' }>
        <div className={ 'main-movie-rating-stars' }>
          <GradeRoundedIcon className={ 'star active' } />
          <GradeRoundedIcon className={ 'star active' } />
          <GradeRoundedIcon className={ 'star active' } />
          <GradeRoundedIcon className={ 'star active' } />
          <GradeRoundedIcon className={ 'star' } />
        </div>
        <p>Efeitos visuais</p>
      </div>
    </div>
  )
}

export default MovieRatings
