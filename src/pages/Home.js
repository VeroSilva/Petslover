import React from 'react'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../components/ListOfPhotoCards'
// import { Layout } from '../components/Layout'

export const Home = ({ id }) => {
  return (
    // <Layout title='Home'>
    <>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={id} />
    </>
    // </Layout>
  )
}

// export default React.memo(HomePage, (prevProps, props) => {
//   return prevProps.id === props.id
// })
