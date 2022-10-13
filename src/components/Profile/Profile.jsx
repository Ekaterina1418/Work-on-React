import React from 'react'

import {
  UpperContainer,
  Avatar,
  Name,
  Position,
  ProfileBlock,
} from './styles/Profile.style'
import { LinkBack } from './LinkBack'

export const Profile = ({
  avatarUrl,
  firstName,
  lastName,
  userTag,
  position,
}) => {
  return (
    <>
      <ProfileBlock>
        <LinkBack />
        <UpperContainer>
          <Avatar src={avatarUrl} alt={avatarUrl} />
          <Name>
            {firstName} {lastName}
            <span>{userTag}</span>
          </Name>
          <Position>{position}</Position>
        </UpperContainer>
      </ProfileBlock>
    </>
  )
}

export default Profile
