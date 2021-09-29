import React from 'react'
import { PhotoCard } from '../components/PhotoCard'
import { gql } from '@apollo/client'
import { Query } from '@apollo/client/react/components'
import { PhotoLoader } from '../components/Loaders/PhotoLoader'

const GET_SINGLE_PHOTO = gql`
  query getSinglePhoto($id:ID!) {
    photo(id: $id){
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`

const renderProp = ({ loading, error, data }) => {
  if (loading) return <PhotoLoader />
  if (error) return <p>Error!</p>

  const { photo = {} } = data
  return <PhotoCard {...photo} loading={loading} />
}

export const PhotoCardWithQuery = ({ id }) => (
  <Query query={GET_SINGLE_PHOTO} variables={{ id }}>
    {renderProp}
  </Query>
)
