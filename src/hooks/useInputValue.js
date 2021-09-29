import { useState } from 'react'

export const useInputValue = initialValue => {
  const [value, setValue] = useState(initialValue)
  const handleOnChange = e => setValue(e.target.value)

  return { value, handleOnChange }
}
