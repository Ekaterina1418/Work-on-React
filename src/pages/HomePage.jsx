import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import { fetchUser } from '../redux/users/userSlice'
import Users from '../components/Users/Users'
import Input from '../components/Input/Input'
function HomePage() {
  const dispatch = useDispatch()
  const { users, error } = useSelector((state) => state.users)
  const loading = useSelector((state) => state.users.loading)
  useEffect(() => {
    dispatch(fetchUser())
  }, [])

const [value, setValueStorage] = useState('')

  return (
    <>
    <Input inputValue={setValueStorage}/>
      {users &&
        users.map((user, index) => {
          return (
            <Users
              key={`${user.id}-${index}`}
              avatarUrl={user.avatarUrl}
              firstName={user.firstName}
              lastName={user.lastName}
              position={user.position}
            ></Users>
          )
        })}

      {error && <h2> Not Found</h2>}
    </>
  )
}
export default HomePage