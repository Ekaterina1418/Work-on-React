import styled from 'styled-components'

export const UserBlock = styled.div`
  display: flex;
  margin-bottom: 12px;
`
export const UsersContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 22px;
  width: 70%;
`

export const ContainerImage = styled.div`
  margin-right: 16px;
`
export const Avatar = styled.img`
  border-radius: 36px;
  width: 72px;
  @media (max-width: 767px) {
    width: 65px;
  }
  @media (max-width: 452px) {
    width: 60px;
  }
`

export const TitleName = styled.div`
  display: flex;
  flex-direction: column;
`

export const Name = styled.h3`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  @media (max-width: 767px) {
    font-size: 14px;
    line-height: 18px;
  }
`

export const Position = styled.p`
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  color: #55555c;
  @media (max-width: 767px) {
    font-size: 11px;
    line-height: 14px;
  }
`
export const Span = styled.span`
  padding-left: 4px;
  color: #97979b;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  @media (max-width: 767px) {
    font-size: 12px;
    line-height: 15px;
  }
`
export const Wrapper = styled.div`
display: flex;
justify-content:space-between;
`

export const BlockDay =  styled.div`
display: flex;
flex-direction:column;
justify-content: space-around;
`
export const Birthday = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #97979b;
`