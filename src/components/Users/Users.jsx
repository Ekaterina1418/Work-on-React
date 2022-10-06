import React from 'react'
import {
  Avatar,
  ContainerImage,
  TitleName,
  UserBlock,
} from './UserStyled/UsersStyled'
function Users(props) {
  const { firstName, lastName, avatarUrl, position } = props
  return (
    <UserBlock>
      <ContainerImage>
        <Avatar src={avatarUrl} alt={avatarUrl} />
      </ContainerImage>
      <TitleName>
        <h3>
          {firstName} {lastName}
        </h3>
        <p>{position}</p>
      </TitleName>
    </UserBlock>
  )
}
export default Users
