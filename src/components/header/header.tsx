import React, { Fragment, useState } from 'react'
import './header.scss'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded'
import Dialog from '@mui/material/Dialog';

function Header() {

  const [ isModalOpen, setIsModalOpen ] = useState(false)

  return (
    <Fragment>
      <div className={ 'header-container' }>
        <MenuRoundedIcon className={ 'menu-icon desktop-hidden' } />
        <a href={ '/' }>
          <img className={ 'movie-logo-image' } src={ 'logo.png' } alt={ 'movie-logo' } />
        </a>
        <div className={ 'header-categories mobile-hidden' }>
          <a href={ '/series' }>Séries</a>
          <a href={ '/movies' }>Filmes</a>
          <a href={ '/documentaries' }>Documentários</a>
        </div>
        <AccountCircleRoundedIcon onClick={ () => setIsModalOpen(true) } />
      </div>
      <Dialog open={ isModalOpen } onClose={ () => setIsModalOpen(false) }>
        <div className={ 'profile-dialog-container' }>
          modal
        </div>
      </Dialog>
    </Fragment>
  )
}

export default Header
