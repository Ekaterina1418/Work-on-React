import React from 'react'
import { Birthday } from './UserStyled/Users.style'

export const UsersAge = ({ birthday }) => {
  return (
    <Birthday>
       {birthday}
    </Birthday>
  )
}
