import React from 'react'
import './header.scss'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';

function Header() {
  return (
    <div className={ 'header-container' }>
      <MenuRoundedIcon className={ 'menu-icon desktop-hidden' } />
      <img className={ 'movie-logo-image' } src={ 'logo.png' } alt={ 'movie-logo' } />
      <div className={ 'header-categories mobile-hidden' }>
        <p>Séries</p>
        <p>Filmes</p>
        <p>Documentários</p>
      </div>
      <AccountCircleRoundedIcon />
    </div>
  )
}

export default Header
