import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/home/home'
import React from 'react'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  }
])
