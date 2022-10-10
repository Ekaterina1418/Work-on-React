import React from 'react'
import { ContainerErrors, ParagraphBasic, ParagraphMinor, LinkReboot } from './style/CriticalError.style'
import img from './icons/aliens.png'

export const CriticalError = ({ refetch }) => {
  return (
    <ContainerErrors>
      <img src={img} alt="aliens" />
      <ParagraphBasic>Какой-то сверхразум все сломал</ParagraphBasic>
      <ParagraphMinor>Постараемся быстро починить</ParagraphMinor>
      <LinkReboot onClick={refetch}>Попробовать снова</LinkReboot>
    </ContainerErrors>
  )
}

