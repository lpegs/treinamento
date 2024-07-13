import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/home/home'
import React from 'react'
import Series from './pages/series/series'
import Movie from './pages/movie/movie'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/series',
    element: <Series />
  },
  {
    path: '/movies',
    element: <Home />
  },
  {
    path: '/documentaries',
    element: <Home />
  },
  {
    path: '/movie/:id',
    element: <Movie />
  },
  {
    path: '/serie/:id',
    element: <Movie />
  },
  {
    path: '/documentary/:id',
    element: <Movie />
  }
])
