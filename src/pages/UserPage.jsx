import React from 'react'
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict'
import format from 'date-fns/format'
import { ru } from 'date-fns/locale'
import { Profile } from '../components/Profile/Profile'
import { ContactsUser } from '../components/Profile/Contacts'
import { useSearchParams } from 'react-router-dom'
import { useGetUsersByDepartmentQuery } from '../redux/users/apiSlice'
import { useParams } from 'react-router-dom'
export const UserPage = () => {
const { id } = useParams()

  const [searchParams] = useSearchParams()
  const selectedDepartment = searchParams.get('departament')
  const { data: users, isSuccess } = useGetUsersByDepartmentQuery(
    selectedDepartment || 'all'
  )

  return (
    <>
      {isSuccess &&
        users.items
          .filter((user) => user.id === id)
          .map((item, index) => {
            return (
              <Profile
                key={`${item.id}-${index}`}
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
                key={`${item.id}-${index}`}
                birthday={item.birthday}
                phone={item.phone}
                age={formatDistanceToNowStrict(new Date(item.birthday), {
                  locale: ru,
                })}
              />
            )
          })}
    </>
  )
}
