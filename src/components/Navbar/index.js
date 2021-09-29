import React from 'react'
import { Nav, Link } from './styles'
import { AiOutlineHeart, AiOutlineHome, AiOutlineUser } from 'react-icons/ai'

const size = '30px'

export const Navbar = () => {
  return (
    <Nav>
      <Link to='/'><AiOutlineHome size={size} /></Link>
      <Link to='/favs'><AiOutlineHeart size={size} /></Link>
      <Link to='/user'><AiOutlineUser size={size} /></Link>
    </Nav>
  )
}
