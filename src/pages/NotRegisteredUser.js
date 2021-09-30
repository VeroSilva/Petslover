import React from 'react'
import Context from '../Context'

import { UserForm } from '../components/UserForm'

export const NotRegisteredUser = () => (
  <Context.Consumer>
    {
      ({ activateAuth }) => {
        return (
          <>
            <UserForm title='Registro' onSubmit={activateAuth} />
            <UserForm title='Inicio sesión' onSubmit={activateAuth} />
          </>
        )
      }
    }
  </Context.Consumer>
)
