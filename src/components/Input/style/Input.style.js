import styled from 'styled-components'
import icons from  './icons/search.svg'
import sort from './icons/sort.svg'

export const InputStyled = styled.input`
  display: block;
  padding: 0 34px;
  height: 40px;
  border: none;
  width: 100%;
  background: #f7f7f8;
  border-radius: 16px;
  border: none;
  &::placeholder {
    color: #c3c3c6;
    font-size: 15px;
    font-weight: 500;
    line-height: 20px;
    padding-left: 10px;
  }
  &:focus {
    outline: none;
  }
`

export const InputWrapper = styled.div`
  position: relative;
  &:before {
    content: '';
    position: absolute;
    height: 20px;
    width: 20px;
    top: 0;
    bottom: 0;
    left: 13px;
    margin: auto 0;
    background: url(${icons}) no-repeat; 
  }
`
export  const Icons = styled.div`
  position: absolute;
  height: 20px;
  width: 20px;
  top: 14px;
  right: 14px;
  background: url(${sort}) no-repeat;  
`
 export const InputTitle = styled.h1`
  margin: 16px 0 14px 18px;
  font-size: 24px;
  line-height: 28px;
  font-weight: 700;
  color: #050510;
`
