import { gql } from '@apollo/client'

const GET_PHOTOS = gql`
query getPhotos {
  photos {
    id
    categoryId
    src
    likes
    userId
    liked
  }
}
`
export const whitPhotos = GET_PHOTOS
