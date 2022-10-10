import React from 'react'
import {
  InputStyled,
  InputWrapper,
  InputTitle,
} from './style/Input.style'
export const Input = ({ inputValue }) => {
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

