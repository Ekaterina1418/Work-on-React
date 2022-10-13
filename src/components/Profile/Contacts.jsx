import React from 'react'
import { DateTime } from 'luxon'
import star from './icon/star.svg'
import telephone from './icon/telephone.svg'
import { Container } from '../styles/Container.style.'
import { BlockInformation, Contacts, Age } from './styles/Profile.style'
export const ContactsUser = ({ phone, birthday, age }) => {
  return (
    <Container>
      <BlockInformation>
        <Contacts>
          <p>
            <img src={`${star}`} alt="star" />
            {DateTime.fromISO(birthday)
              .setLocale('ru')
              .toFormat('dd LLLL yyyy')}
          </p>
          <p>
            <img src={`${telephone}`} alt="telephone" />
            {phone}
          </p>
        </Contacts>
        <Age>{age}</Age>
      </BlockInformation>
    </Container>
  )
}
