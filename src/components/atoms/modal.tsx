import { Dialog, Divider } from '@mui/material'
import React, { ReactNode } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import { CustomText } from './typography'
import { ContainerHeaderModal } from './container'

export interface ModalProps {
  toggleModal(open: boolean): any
  openModal: boolean
  children: ReactNode
  modalTitle: string
}

export default function Modal(props: ModalProps) {
  const { toggleModal, openModal, children, modalTitle } = props
  return (
    <Dialog open={openModal} onClose={toggleModal(false)} disableAutoFocus>
      <ContainerHeaderModal>
        <CustomText fsize={20}>{modalTitle}</CustomText>
        <CloseIcon onClick={toggleModal(false)} />
      </ContainerHeaderModal>
      <Divider />
      {children}
    </Dialog>
  )
}
