import React from 'react'
import cross from '../ModalWindow/icons/cross.svg'
import {
  CloseButton,
  Label,
  ModalBody,
  ModalHeader,
  ModalOverlay,
  ModalWindow,
  Wrapper,
  WrapperRadio,
  Span,
} from './styles/Modal.style'

export const Modal = ({ isOpen, onCancel, valueRadio, onChange }) => {
  if (!isOpen) return null
  return (
    <>
      <ModalOverlay>
        <ModalWindow>
          <ModalHeader>
            <h3>Сортировка</h3>
            <Wrapper>
              <CloseButton onClick={() => onCancel()}>
                <img src={cross} alt="cross" />
              </CloseButton>
            </Wrapper>
          </ModalHeader>
          <ModalBody>
            <WrapperRadio>
              <Label>
                <input
                  type="radio"
                  name="sort"
                  value="alphabet"
                  checked={valueRadio === 'alphabet'}
                  id="alphabet"
                  onChange={onChange}
                />
                <Span></Span>
                По алфавиту
              </Label>
            </WrapperRadio>
            <WrapperRadio>
              <Label>
                <input
                  id="birthday"
                  name="sort"
                  value="birthday"
                  type="radio"
                  checked={valueRadio === 'birthday'}
                  onChange={onChange}
                />
                <Span></Span>
                По дню рождения
              </Label>
            </WrapperRadio>
          </ModalBody>
        </ModalWindow>
      </ModalOverlay>
    </>
  )
}

export default Modal
