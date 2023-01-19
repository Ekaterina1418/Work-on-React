import React from 'react'
import { UsersAge } from './UsersAge'
export const RenderBirthday = ({ day }) => {
  return (
    <>
      {day.map((item, index) => {
        return <UsersAge key={index}
         birthday={item.birthday} />
      })}
    </>
  )
}
