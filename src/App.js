import React from 'react'
import { Router } from '@reach/router'

import Detail from './pages/Detail'
import { Home } from './pages/Home'

import { GlobalStyle } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { Navbar } from './components/Navbar'

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Logo />
      <Router>
        <Home path='/' />
        <Home path='/pet/:id' />
        <Detail path='/detail/:detailId' />
      </Router>
      <Navbar />
    </>
  )
}
