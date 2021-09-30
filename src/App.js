import React, { useContext, Suspense } from 'react'
import { Router, Redirect } from '@reach/router'

import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { Favs } from './pages/Favs'
import { User } from './pages/User'
import { NotRegisteredUser } from './pages/NotRegisteredUser'
import NotFound from './pages/NotFound'

import { GlobalStyle } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { Navbar } from './components/Navbar'
import { Context } from './Context'

// const Favs = React.lazy(() => import('./pages/Favs'))
// const Home = React.lazy(() => import('./pages/Home'))
// const Detail = React.lazy(() => import('./pages/Detail'))
// const User = React.lazy(() => import('./pages/User'))
// const NotRegisteredUser = React.lazy(() => import('./pages/NotRegisteredUser'))
// const NotFound = React.lazy(() => import('./pages/NotFound'))

export const App = () => {
  const { isAuth } = useContext(Context)

  return (
    <Suspense fallback={<div />}>
      <GlobalStyle />
      <Logo />
      <Router>
        <NotFound default />
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
      <Navbar />
    </Suspense>
  )
}
