import React from 'react'
import { Link } from 'react-router-dom'
 import arrow from './icon/arrow.svg'
import { Back } from './styles/Profile.style'
export const LinkBack = () => {
  return (
    <Link to={'/'}>
      <div>
        <Back src={arrow} alt="arrow" />
      </div>
    </Link>
  )
}
