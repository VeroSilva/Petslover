import React from 'react'
import ContentLoader from 'react-content-loader'

export const CategoryLoader = (props) => (
  <ContentLoader
    speed={2}
    width={77}
    height={100}
    viewBox='0 0 77 100'
    backgroundColor='#f9f9f9'
    foregroundColor='#ececec'
    {...props}
  >
    <rect x='21' y='75' rx='9' ry='9' width='33' height='18' />
    <circle cx='38' cy='37' r='36' />
  </ContentLoader>
)
