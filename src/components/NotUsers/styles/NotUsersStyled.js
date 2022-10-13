import styled from 'styled-components'
import magnifier from '../icons/magnifier.svg'
export const ContainerBlank = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export const Magnifier = styled.div`
  background: url(${magnifier});
  width: 56px;
  height: 56px;
  margin-bottom: 8px;
`

export const TitleBlank = styled.p`
  font-weight: 600;
  font-size: 17px;
  line-height: 22px;
  margin-bottom: 12px;
`

export const ParagraphBlank = styled.p`
  color: #97979b;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
`
