import { css, keyframes } from 'styled-components'

const fadeInKeyFrames = keyframes`
  from {
    filter: blur(5px);
    opacity: 0,
  }

  to {
    filter: blur(0);
    opacity: 1;
  }
`
const slideDownKeyFrames = keyframes`
  from {
    top: -100px;
  }

  to {
    top: -20px;
  }
`

export const fadeIn = ({ time = '1s', type = 'ease' } = {}) => css`
  animation: ${time} ${fadeInKeyFrames} ${type};
`

export const slideDown = ({ time = '1s', type = 'ease' } = {}) => css`
  animation: ${time} ${slideDownKeyFrames} ${type};
`
