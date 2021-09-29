import React from 'react'

import { useInputValue } from '../../hooks/useInputValue'

import { Form, Input } from './styles'

export const UserForm = ({ onSubmit }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  return (
    <Form onSubmit={onSubmit}>
      <Input placeholder='Email' value={email.value} onChange={email.handleOnChange} />
      <Input placeholder='Password' type='password' value={password.value} onChange={password.handleOnChange} />
    </Form>
  )
}
