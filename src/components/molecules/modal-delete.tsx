import styled from '@emotion/styled'
import React from 'react'
import { FlexRowSpaceBetween } from '../atoms/flex'
import { CustomText } from '../atoms/typography'
import { Divider } from '@mui/material'
import { CustomButton } from '../atoms/button'

interface ModalDeleteProps {
  handleClose?(): void
  handleDelete(): void
}

const ModalContainer = styled.div`
  height: 100%;
`

const ContainerBtn = styled(FlexRowSpaceBetween)`
  padding: 16px;
`

export default function ModalDelete(props: ModalDeleteProps) {
  const { handleClose, handleDelete } = props
  return (
    <ModalContainer>
      <CustomText fsize={16} fweight={400} margin="20px 24px" color="#3A3A3C">
        Apakah yakin untuk menghapus produk yang sudah masuk ke keranjangmu ?
      </CustomText>

      <Divider />

      <ContainerBtn>
        <CustomButton
          variant="contained"
          label="Batal"
          color="secondary"
          onClick={handleClose}
        />
        <CustomButton
          variant="outlined"
          label="Hapus"
          color="secondary"
          onClick={handleDelete}
        />
      </ContainerBtn>
    </ModalContainer>
  )
}
