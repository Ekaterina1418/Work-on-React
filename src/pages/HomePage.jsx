import React, { useState } from 'react'
import compareDesc from 'date-fns/compareDesc'
import { DateTime } from 'luxon'
import { useSearchParams } from 'react-router-dom'
import { Input } from '../components/Input/Input'
import { Users, UsersSkeleton, UsersContainer } from '../components/Users'
import { CriticalError } from '../components/CriticalError/CriticalError'
import { Departments } from '../components/Departments'
import { NotUsers } from '../components/NotUsers/NotUsers'
import { useGetUsersByDepartmentQuery } from '../redux/users/apiSlice'
import Modal from '../components/ModalWindow/Modal'
import { Container } from '../components/styles/Container.style.'
import { UsersAge } from '../components/Users/UsersAge'
import { Wrapper } from '../components/Users/UserStyled/Users.style'


function HomePage() {
  const [value, setValue] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [valueRadio, setValueRadio] = useState('')
  const [searchParams] = useSearchParams()
  const selectedDepartment = searchParams.get('department')
  const {
    data: users,
    isLoading,
    isSuccess,
    isError,
    refetch,
  } = useGetUsersByDepartmentQuery(selectedDepartment || 'all')

  const filteredUsers =
    users &&
    users.items.filter((user) => {
      if (value) {
        return user.firstName.toLowerCase().includes(value.toLowerCase())
      }
      return true
    })

  const sortedUsers =
    filteredUsers &&
    filteredUsers.sort((userA, userB) => {
      if (valueRadio === 'birthday') {
        return compareDesc(new Date(userA.birthday), new Date(userB.birthday))
      }
      if (valueRadio === 'alphabet') {
        return userA.firstName > userB.firstName
      }
    })
   const age =
  filteredUsers &&
  filteredUsers.map((user) => {
    return DateTime.fromISO(user.birthday).setLocale('ru').toFormat('dd MMM')
  })


  return (
    <>
      <Container>
        <Input
          value={value}
          onChange={(event) => {
            setValue(event.target.value)
          }}
          showPopup={() => setIsOpen(true)}
        />
      </Container>
      <Departments />
      <Container>
        <Wrapper>
          {valueRadio === 'birthday' && <UsersAge>{age}</UsersAge>}
          <UsersContainer>
            {isLoading && <UsersSkeleton user={12} />}
            {isSuccess && <Users users={sortedUsers} />}
            {isError && <CriticalError refetch={refetch} />}
            <Modal
              isOpen={isOpen}
              onCancel={() => setIsOpen(false)}
              valueRadio={valueRadio}
              onChange={(event) => {
                setValueRadio(event.target.value)
                setIsOpen(false)
              }}
            />
            {filteredUsers == 0 && <NotUsers />}
          </UsersContainer>
        </Wrapper>
      </Container>
    </>
  )
}
export default HomePage
