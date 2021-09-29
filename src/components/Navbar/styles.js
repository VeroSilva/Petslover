import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'
import { fadeIn } from '../../styles/animation'

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  background-color: #fcfcfc;
  border-top: 1px solid #0e0e0e;
  bottom: 0;
  height: 50px;
  width: 100%;
  justify-content: space-around;
  left: 0;
  right: 0;
  margin: 0 auto;
  position: fixed;
  z-index: 1000;
`

export const Link = styled(LinkRouter)`
  display: inline-flex;
  align-items: center;
  color: #888;
  height: 100%;
  width: 100%;
  justify-content: center;
  text-decoration: none;
  &[aria-current]{
    color: #000;
    &:after {
      ${fadeIn({ time: '0.5s' })};
      content: '·';
      position: absolute;
      bottom: 0;
      font-size: 32px;
      line-height: 20px;
    }
  }
`
