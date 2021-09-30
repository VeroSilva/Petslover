import React, { useState, useContext } from 'react'
import { Context } from '../Context'
import { useRegisterMutation } from '../hooks/useRegisterMutation'
import { useLoginMutation } from '../hooks/useLoginMutation'

import { UserForm } from '../components/UserForm'

import { Ask } from './styles/NotRegisteredUser'

export const NotRegisteredUser = () => {
  const [formLogin, setformLogin] = useState(false)
  const { activateAuth } = useContext(Context)

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

  const LoginForm = ({ activateAuth }) => {
    const { login, loading, error } = useLoginMutation()
    const onSubmit = ({ email, password }) => {
      const input = { email, password }
      const variables = { input }
      login({ variables }).then(({ data }) => {
        const { login } = data
        activateAuth(login)
      })
    }
    const errorMsg = error && 'Credenciales incorrectas o el usuario no existe.'
    return <UserForm disabled={loading} error={errorMsg} onSubmit={onSubmit} title='Iniciar sesión' />
  }

  const CallToActionLogin = () => {
    return (
      <Ask>¿Ya tienes cuenta? <a onClick={() => setformLogin(true)}>Inicia sesión</a></Ask>
    )
  }

  const CallToActionRegister = () => {
    return (
      <Ask>¿No tienes cuenta? <a onClick={() => setformLogin(false)}>Regístrate</a></Ask>
    )
  }

  return (
    <>
      {
      formLogin
        ? <><RegisterForm activateAuth={activateAuth} /><CallToActionRegister /></>
        : <><LoginForm activateAuth={activateAuth} /><CallToActionLogin /></>
    }
    </>
  )
}
