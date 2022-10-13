import React, { Component } from 'react'
import {
  ContainerBlank,
  Magnifier,
  ParagraphBlank,
  TitleBlank,
} from './styles/NotUsersStyled'

export class NotUsers extends Component {
  render() {
    return (
      <ContainerBlank>
        <Magnifier />
        <TitleBlank>Мы никого не нашли</TitleBlank>
        <ParagraphBlank>Попробуй скорректировать запрос</ParagraphBlank>
      </ContainerBlank>
    )
  }
}

export default NotUsers
