import React from 'react'
import {
  InputStyled,
  InputWrapper,
  InputTitle,
} from '../styles/InputStyled/Input'
function Input({ inputValue }) {
  return (
    <>
      <InputTitle>Поиск</InputTitle>
      <InputWrapper>
        <InputStyled
          onChange={(event) => inputValue(event.target.value)}
          placeholder="Введи имя, тег, почту..."
        />
      </InputWrapper>
    </>
  )
}
export default Input
