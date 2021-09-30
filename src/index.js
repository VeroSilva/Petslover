import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import { ApolloClient, InMemoryCache, ApolloProvider, ApolloLink, from, HttpLink } from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import Context from './Context'

const authMiddleware = new ApolloLink((operation, forward) => {
  const token = window.sessionStorage.getItem('token')
  if (token) {
    operation.setContext({
      headers: {
        authorization: `Bearer ${token}`
      }
    })
  }
  return forward(operation)
})

const errorMiddleware = onError(({ networkError }) => {
  if (networkError && networkError.result.code === 'invalid_token') {
    window.sessionStorage.removeItem('token')
    window.location = '/'
  }
})

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([
    errorMiddleware,
    authMiddleware,
    new HttpLink({
      uri: 'https://petgram-server-vero-verosilva.vercel.app/graphql'
    })
  ])
})

// const client = new ApolloClient({
//   uri: 'https://petgram-server-vero-verosilva.vercel.app/graphql',
//   cache: new InMemoryCache()
// })

ReactDOM.render(
  <Context.Provider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Context.Provider>,
  document.getElementById('app')
)
