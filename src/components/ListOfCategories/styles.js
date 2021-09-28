import styled, { css } from 'styled-components'
import { slideDown } from '../../styles/animation'

export const List = styled.ul`
    display: flex;
    overflow: scroll;
    width: 100%;
    ${props => props.fixed && css`
      {
        ${slideDown()}
        background-color: #ffffff;
        border-radius: 60px;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
        left: 0;
        right: 0;
        top: -20px;
        margin: 0 auto;
        max-width: 400px;
        padding: 5px;
        position: fixed;
        transform: scale(.5);
        z-index: 99999;
      }
    `}
`
export const Item = styled.li`
    padding: 0 8px;
`
