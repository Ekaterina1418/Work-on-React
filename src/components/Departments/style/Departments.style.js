import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const List = styled.ul`
  display: flex;
  list-style: none;
  margin: 22px 0 7.67px 12px;
  padding: 0;
  
`

export const ListItem = styled.li``

export const LinkStyled = styled(Link)`
  margin-right: 24px;
  color: ${(props) => (props.$isActive ? ' #050510' : '#97979b')};
  font-size: 15px;
  font-weight: 500;
  line-height: 20px;
  text-decoration: none;
  border-bottom: ${(props) => (props.$isActive ? '2px solid #6534FF' : 'none')};
  padding-bottom: 7.67px;
  @media (max-width: 767px) {
    font-size: 14px;
    line-height: 18px;
    margin-right: 21px;
  }
  @media (max-width: 530px) {
    font-size: 12px;
    line-height: 15px;
    margin-right: 18px;
  }
  @media (max-width: 460px) {
    font-size: 11px;
    line-height: 14px;
    margin-right: 11px;
  }
  @media (max-width: 400px) {
    font-size: 9px;
    line-height: 12px;
    margin-right: 7px;
  }
  @media (max-width: 320px) {
    font-size: 9px;
    line-height: 12px;
    margin-right: 6px;
  }
`
export const Hr = styled.hr`
  margin: 0;
  border-top: 0;
  border-bottom: 1px solid #c3c3c6;
`
