import React from 'react'

import { useInputValue } from '../../hooks/useInputValue'

import { Form, Input, Title, Error } from './styles'
import logoLogin from '../../assets/images/dog.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'

export const UserForm = ({ disabled, error, title, onSubmit }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit({
      email: email.value,
      password: password.value
    })
  }

  return (
    <Form onSubmit={handleSubmit} disabled={disabled}>
      <div>
        <img src={logoLogin} />
      </div>
      <Title>{title}</Title>
      <Input placeholder='Email' value={email.value} onChange={email.handleOnChange} disabled={disabled} />
      <Input placeholder='Password' type='password' value={password.value} onChange={password.handleOnChange} disabled={disabled} />
      <button>{title}</button>
      {
        error && <Error><FontAwesomeIcon icon={faExclamationTriangle} /> {error}</Error>
      }
    </Form>
  )
}
