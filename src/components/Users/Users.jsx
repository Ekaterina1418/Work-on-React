import React from 'react'
import { DateTime } from 'luxon'
import { Person } from './Person'
import { Link } from 'react-router-dom'
export const Users = ({ users }) => {
  
  return (
    <>
      {users.map((user, index) => {
        return (
          <>
            <Link
              key={`${user.id}-${index}`}
              to={`/profile/${user.id}`}
              style={{ textDecoration: 'none', color: ' #050510' }}
            >
              <Person
                avatarUrl={user.avatarUrl}
                firstName={user.firstName}
                lastName={user.lastName}
                position={user.position}
                userTag={user.userTag}
                birthday={DateTime.fromISO(user.birthday)
                  .setLocale('ru')
                  .toFormat('dd MMM')}
              />
            </Link>
          </>
        )
      })}
    </>
  )
}
