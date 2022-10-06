import styled from 'styled-components'

export const UserBlock = styled.div`
  display: flex;
  margin-bottom: 12px;
`

export const UsersContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 22px;
`

export const ContainerImage = styled.div`
  margin-right: 16px;
`
export const Avatar = styled.img`
  border-radius: 36px;
  width: 72px;
`

export const TitleName = styled.div`
  display: flex;
  flex-direction: column;
  &:first-child {
    content: '';
    font-weight: 500;
    font-size: 24px;
    line-height: 20px;
  }
  &::before {
    content: '';
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
  }
`

// export const Name = styled.h3`

// `

// export const Position = styled.p`
//   font-weight: 400;
//   font-size: 13px;
//   line-height: 16px;
// `
