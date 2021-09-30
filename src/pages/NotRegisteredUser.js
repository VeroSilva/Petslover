import React from 'react'
import Context from '../Context'
import { useRegisterMutation } from '../hooks/useRegisterMutation'

import { UserForm } from '../components/UserForm'

export const NotRegisteredUser = () => {
  const RegisterForm = ({ activateAuth }) => {
    const { register, loading, error } = useRegisterMutation()
    const onSubmit = ({ email, password }) => {
      const input = { email, password }
      const variables = { input }
      register({ variables }).then(({ data }) => {
        const { signup } = data
        activateAuth(signup)
      })
    }
    const errorMsg = error && 'El usuario ya existe o hay algún problema.'
    return <UserForm disabled={loading} error={errorMsg} onSubmit={onSubmit} title='Registrarse' />
  }

  return (
    <Context.Consumer>
      {
        ({ activateAuth }) => {
          return (
            <>
              <RegisterForm activateAuth={activateAuth} />
              <UserForm title='Inicio sesión' onSubmit={activateAuth} />
            </>
          )
        }
      }
    </Context.Consumer>
  )
}
