import React from 'react'
import ContentLoader from 'react-content-loader'

export const PhotoLoader = (props) => (
  <ContentLoader
    speed={2}
    width={500}
    height={500}
    viewBox='0 0 500 500'
    backgroundColor='#DADADA'
    foregroundColor='#C3C3C3'
    {...props}
  >
    <rect x='4' y='3' rx='12' ry='12' width='360' height='241' />
    <rect x='5' y='255' rx='0' ry='0' width='165' height='24' />
  </ContentLoader>
)
