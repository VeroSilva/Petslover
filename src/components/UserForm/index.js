import React from 'react'

import { useInputValue } from '../../hooks/useInputValue'

import { Form, Input, Title } from './styles'
import logoLogin from '../../assets/images/dog.svg'

export const UserForm = ({ title, onSubmit }) => {
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
    <Form onSubmit={handleSubmit}>
      <div>
        <img src={logoLogin} />
      </div>
      <Title>{title}</Title>
      <Input placeholder='Email' value={email.value} onChange={email.handleOnChange} />
      <Input placeholder='Password' type='password' value={password.value} onChange={password.handleOnChange} />
      <button>{title}</button>
    </Form>
  )
}
