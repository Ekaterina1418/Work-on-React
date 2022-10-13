import React from 'react'
import sort from './InputStyled/icons/sort.svg'
import icons from './InputStyled/icons/search.svg'
import {
  InputStyled,
  InputWrapper,
  InputTitle,
  Icons,
} from './InputStyled/Input'
export const Input = ({ value, onChange, showPopup }) => {
  return (
    <>
      <InputTitle>Поиск</InputTitle>
      <InputWrapper>
        <InputStyled
          value={value}
          onChange={onChange}
          placeholder="Введи имя, тег, почту..."
        ></InputStyled>
        <img src={icons} alt="search" />
        <Icons onClick={showPopup}>
          <img src={sort} alt="sort" />
        </Icons>
      </InputWrapper>
    </>
  )
}
export default Input
