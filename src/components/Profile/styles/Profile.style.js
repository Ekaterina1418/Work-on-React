import styled from 'styled-components'


export const UpperContainer = styled.div`
  height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 767px) {
   height:240px;
  }
  @media(max-width: 320px) {
    height:200px;
  }
`
export const ProfileBlock = styled.div`
  background: #f7f7f8;
`
export const Avatar = styled.img`
  width: 104px;
  height: 104px;
  border-radius: 64px;
  margin-bottom: 24px;
  @media (max-width: 767px) {
    width: 90px;
    height: 90px;
  }
  @media (max-width: 320px) {
    width: 80px;
    height: 80px;
  }
`
export const Name = styled.p`
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  margin-bottom: 12px;
  @media (max-width: 767px) {
    font-size: 20px;
    line-height: 24px;
  }
  @media (max-width: 320px) {
   font-size: 17px;
   line-height: 21px;
  }
  color: #050510;
  & > span {
    font-weight: 400;
    font-size: 17px;
    line-height: 22px;
    color: #97979b;
    margin-left: 4px;
    @media (max-width: 767px) {
      font-size: 14px;
      line-height: 18px;
    }
  }
`
export const Position = styled.p`
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  color: #55555c;
  @media (max-width: 767px) {
   font-size: 11px;
   line-height: 13px;
  }
`
export const BlockInformation = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 27px;
`
export const Contacts = styled.div`
  display: flex;
  & > p {
    display: flex;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    @media (max-width: 767px) {
      font-size: 13px;
      line-height: 17px;
    }
  }
  flex-direction: column;
  & > p:last-child {
    margin-top: 27px;
    display: flex;
  }
  & > p img {
    margin-right: 14px;
  }
`
export const Age = styled.p`
  color: #97979b;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  @media (max-width: 767px) {
    font-size: 13px;
    line-height: 17px;
  }
`
export const Back = styled.img`
  margin: 32px 0 0 28px;
`
