import React, { useContext } from 'react'
import { Router, Redirect } from '@reach/router'

import Detail from './pages/Detail'
import User from './pages/User'
import Favs from './pages/Favs'
import { NotRegisteredUser } from './pages/NotRegisteredUser'
import { Home } from './pages/Home'

import { GlobalStyle } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { Navbar } from './components/Navbar'
import { Context } from './Context'

export const App = () => {
  const { isAuth } = useContext(Context)

  return (
    <>
      <GlobalStyle />
      <Logo />
      <Router>
        <Home path='/' />
        <Home path='/pet/:id' />
        <Detail path='/detail/:detailId' />
        {!isAuth && <NotRegisteredUser path='/login' />}
        {!isAuth && <Redirect noThrow from='/favs' to='/login' />}
        {!isAuth && <Redirect noThrow from='/user' to='/login' />}
        {isAuth && <Redirect noThrow from='/login' to='/' />}
        <Favs path='/favs' />
        <User path='/user' />
      </Router>

      {/* <UserLogged>
        {
          ({ isAuth }) =>
            isAuth
              ? <Router>
                <Favs path='/favs' />
                <User path='/user' />
              </Router>
              : <Router>
                <NotRegisteredUser path='/favs' />
                <NotRegisteredUser path='/user' />
              </Router>
        }
      </UserLogged> */}

      <Navbar />
    </>
  )
}
