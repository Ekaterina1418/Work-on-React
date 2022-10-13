import React from 'react'
import { useSearchParams } from 'react-router-dom'

import { departments } from './constants'
import { List, ListItem, LinkStyled, Hr } from './style/Departments.style'

export const Departments = () => {
  const [searchParams] = useSearchParams()
  const selectedDepartment = searchParams.get('department')
  return (
    <>
      <List>
        {departments.map((department) => (
          <ListItem key={department.id}>
            <LinkStyled
              to={`?department=${department.id}`}
              $isActive={selectedDepartment === department.id}
            >
              {department.label}
            </LinkStyled>
          </ListItem>
        ))}
      </List>
      <Hr />
    </>
  )
}
