import React from 'react'
import { DateTime } from 'luxon'
import { Profile } from '../components/Profile/Profile'
import { ContactsUser } from '../components/Profile/Contacts'
import { useSearchParams } from 'react-router-dom'
import { useGetUsersByDepartmentQuery } from '../redux/users/apiSlice'
import { useParams } from 'react-router-dom'
export const UserPage = () => {
  const { id } = useParams()

  const [searchParams] = useSearchParams()
  const selectedDepartment = searchParams.get('departament')
  const {
    data: users,
    isSuccess,
  } = useGetUsersByDepartmentQuery(selectedDepartment || 'all')

  return (
    <>
      {isSuccess &&
        users.items
          .filter((user) => user.id === id)
          .map((item, index) => {
            return (
              <Profile
                key={index}
                avatarUrl={item.avatarUrl}
                firstName={item.firstName}
                lastName={item.lastName}
                position={item.position}
                userTag={item.userTag}
              />
            )
          })}
      {isSuccess &&
        users.items
          .filter((user) => user.id === id)
          .map((item, index) => {
            return (
              <ContactsUser
                key={index}
                birthday={item.birthday}
                phone={item.phone}
                age={DateTime.now()
                  .diff(DateTime.fromISO(item.birthday))
                  .toFormat('yy')}
              />
            )
          })}
    </>
  )
}
