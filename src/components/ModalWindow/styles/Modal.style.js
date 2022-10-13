import styled from 'styled-components'

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(5, 5, 16, 0.16);
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ModalWindow = styled.div`
  position: relative;
  padding: 24px 23px 29px 18px;
  width: 100%;
  max-width: 373px;
  background-color: #fff;
  border-radius: 20px;
  @media (max-width: 767px) {
    padding: 18px 17px 24px 13px;
    width: 80%;
  }
`

export const ModalHeader = styled.div`
  text-align: center;
  margin-bottom: 30px;
  & > h3 {
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    @media (max-width: 767px) {
      font-size: 16px;
      line-height: 20px;
    }
    @media (max-width: 425px) {
      font-size: 14px;
      line-height: 18px;
    }
  }
`
export const Wrapper = styled.div`
  position: absolute;
  right: 30px;
  top: 20px;
  width: 24px;
  background-color: #f7f7f8;
  border-radius: 12px;
  padding: 7px;
  @media (max-width: 767px) {
    padding: 5px;
    width: 19px;
  }
`

export const CloseButton = styled.div`
  height: 10px;
  position: relative;
  bottom: 5px;
  & > img {
    height: 8px;
  }
  @media (max-width: 767px) {
    bottom: 8px;
    height: 8px;
    & > img {
      height: 6px;
    }
  }
`
export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
`
export const WrapperRadio = styled.div`
  display: flex;
  &:first-child {
    margin-bottom: 40px;
    @media (max-width: 767px) {
      margin-bottom: 25px;
    }
  }
`

export const Span = styled.span`
  display: inline-block;
  margin-right: 14px;
  width: 20px;
  height: 20px;
  background-color: #ffffff;
  border: 2px solid #6534ff;
  border-radius: 50%;
  vertical-align: text-top;
  @media (max-width: 767px) {
    width: 15px;
    height: 15px;
  }

  ::before {
    content: '';
    width: 19px;
    height: 19px;
    position: absolute;
    left: 18px;
    border-radius: 55%;
    border: 6px solid #6534ff;
    transform: translate(-50% -50%) scale(0);
    display: none;
    @media (max-width: 767px) {
      width: 15px;
      height: 15px;
      left: 13px;
    }
  }
`
export const Label = styled.label`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  @media (max-width: 767px) {
    font-size: 13px;
    line-height: 17px;
  }
  & > input {
    width: 0;
    height: 0;
    position: absolute;
    top: 0;
  }
  & > input:checked + span::before {
    display: block;
  }
  & > input:checked + span {
    border: none;
  }
`
