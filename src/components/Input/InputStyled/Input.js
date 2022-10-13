import styled from 'styled-components'

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
    @media (max-width: 767px) {
      font-size: 12px;
      line-height: 16px;
    }
    @media (max-width: 425px) {
      font-size: 10px;
      line-height: 14px;
    }
  }
  &:focus {
    outline: none;
  }
  @media (max-width: 767px) {
    height: 35px;
    padding: 0 30px;
  }
  @media (max-width: 425px) {
    height: 30px;
    padding: 0 25px;
  }
`

export const InputWrapper = styled.div`
  position: relative;
  & > img {
    position: absolute;
    top: 10px;
    bottom: 0;
    left: 13px;
    @media (max-width: 767px) {
      width: 17px;
      height: 17px;
      left: 10px;
    }
    @media (max-width: 425px) {
      width: 15px;
      height: 15px;
      left: 10px;
      top: 8px;
    }
  }
`
export const Icons = styled.div`
  position: absolute;
  top: 11px;
  right: 14px;
  & > img {
    width: 20px;
    height: 20px;
  }
  @media (max-width: 767px) {
    right: 12px;
    top: 8px;
    & > img {
      width: 17px;
      height: 17px;
    }
  }
  @media (max-width: 425px) {
    right: 10px;
    top: 7px;
  }
  & > img {
    width: 15px;
    height: 15px;
  }
`
export const InputTitle = styled.h1`
  margin: 16px 0 14px 18px;
  font-size: 24px;
  line-height: 28px;
  font-weight: 700;
  color: #050510;
  @media (max-width: 767px) {
    font-size: 20px;
    line-height: 24px;
  }
  @media (max-width: 424px) {
    font-size: 18px;
    line-height: 22px;
  }
  @media (max-width: 320px) {
    font-size: 15px;
    line-height: 18px;
  }
`
