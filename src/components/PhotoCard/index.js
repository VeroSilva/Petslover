import React from 'react'
import { useNearScreen } from '../../hooks/useNearScreen'
import { useToogleLikeMutation } from '../../hooks/useToogleLikeMutation'

import Proptypes from 'prop-types'
import { Link } from '@reach/router'

import { Article, ImgWrapper, Img } from './styles'
import { FavButton } from '../FavButton'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, liked, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, ref] = useNearScreen()
  const { mutation } = useToogleLikeMutation()

  const handleFavClick = () => {
    mutation({
      variables: {
        input: { id }
      }
    })
  }

  return (
    <Article ref={ref}>
      {
        show &&
          <>
            <Link to={`/detail/${id}`}>
              <ImgWrapper>
                <Img src={src} />
              </ImgWrapper>
            </Link>

            <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
          </>
      }
    </Article>
  )
}

PhotoCard.prototypes = {
  id: Proptypes.string.isRequired,
  liked: Proptypes.bool.isRequired,
  src: Proptypes.string.isRequired,
  likes: function (prop, propName, componentName) {
    const propValue = prop[propName]

    if (propValue === undefined) {
      return new Error(`${propName} must be defined`)
    }

    if (propValue < 0) {
      return new Error(`${propName} value must be greater than 0`)
    }
  }
}
