import React from 'react'
import Layout from '../../layouts/Layout'
import { CustomButton } from '../atoms/button'
import { ContainerCartList } from '../atoms/container'
import { FlexClickable, FlexFull, FlexResponsiveDirection } from '../atoms/flex'
import Modal from '../atoms/modal'
import ModalDelete from '../molecules/modal-delete'
import EmptyCart from '../organisme/EmptyCart'
import InfoCart from '../organisme/InfoCart'
import ProductCart from '../organisme/ProductCart'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import { CustomText } from '../atoms/typography'

interface CartContentProps {
  redirectSearchProduct(): void
  onDelete(id: string): void
  modalOpen: boolean
  toggleModal(isOpen: boolean): any
  handleDelete(): void
  onBack(): void
  cartList: any
}

export default function CartContent(props: CartContentProps) {
  const {
    redirectSearchProduct,
    onDelete,
    modalOpen,
    toggleModal,
    handleDelete,
    onBack,
    cartList,
  } = props
  return (
    <Layout>
      <FlexClickable onClick={onBack}>
        <ArrowBackIosIcon />
        <CustomText>Back</CustomText>
      </FlexClickable>
      <FlexResponsiveDirection>
        <ContainerCartList>
          {cartList.length > 0 ? (
            cartList.map((item: any) => (
              <ProductCart
                key={item.id}
                {...item}
                onDelete={onDelete}
                modalOpen={modalOpen}
                toggleModal={toggleModal}
                handleDelete={handleDelete}
              />
            ))
          ) : (
            <EmptyCart redirectSearchProduct={redirectSearchProduct} />
          )}
          {cartList.length > 0 && (
            <FlexFull margin="20px 0">
              <CustomButton
                variant="outlined"
                label="Cari Produk"
                color="secondary"
                onClick={redirectSearchProduct}
              />
            </FlexFull>
          )}
        </ContainerCartList>
        <InfoCart />
      </FlexResponsiveDirection>
      <Modal
        openModal={modalOpen}
        toggleModal={toggleModal}
        modalTitle="Hapus Produk"
      >
        <ModalDelete
          handleDelete={handleDelete}
          handleClose={toggleModal(false)}
        />
      </Modal>
    </Layout>
  )
}
