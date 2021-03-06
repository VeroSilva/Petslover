import React from 'react'
import { FavsWithQuery } from '../container/GetFavoritesWithQuery'
import { Layout } from '../components/Layout'

export default () => (
  <Layout title='Tus favoritos' subtitle='Aquí puedes encontrar tus favoritos'>
    <FavsWithQuery />
  </Layout>
)
