import React from 'react'
import {
  Avatar,
  ContainerImage,
  TitleName,
  UserBlock,
  Name,
  Position,
  Span,
  Birthday,
} from './UserStyled/Users.style'
export const Person = (props) => {
  const { firstName, lastName, avatarUrl, position, userTag, birthday } = props
  return (
    <UserBlock>
      <ContainerImage>
        <Avatar src={avatarUrl} alt={avatarUrl} />
      </ContainerImage>
      <TitleName>
        <Name>
          {firstName} {lastName}
          <Span>{userTag}</Span>
        </Name>
        <Position>{position}</Position>
        <Birthday>{birthday}</Birthday>
      </TitleName>
    </UserBlock>
  )
}
