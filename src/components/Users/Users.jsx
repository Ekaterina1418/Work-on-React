import React from 'react'
import { Person } from './Person'
import { Link } from 'react-router-dom'
export const Users = ({ users }) => {
  return (
    <>
      {users.map((user, index) => {
        return (
          <Link
            key={index}
            to={`/profile/${user.id}`}
            style={{ textDecoration: 'none', color: ' #050510' }}
          >
            <Person
              key={`${user.id}-${index}`}
              avatarUrl={user.avatarUrl}
              firstName={user.firstName}
              lastName={user.lastName}
              position={user.position}
              userTag={user.userTag}
              birthday = {user.birthday}
            />
          </Link>
        )
      })}
    </>
  )
}
