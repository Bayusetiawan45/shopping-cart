import React from 'react'
import { useShoppingCart } from '../../context/ShoppingCartContext'
import Layout from '../../layouts/Layout'
import { CustomButton } from '../atoms/button'
import { ContainerCartList } from '../atoms/container'
import { FlexFull, FlexResponsiveDirection } from '../atoms/flex'
import Modal from '../atoms/modal'
import ModalDelete from '../molecules/modal-delete'
import EmptyCart from '../organisme/EmptyCart'
import InfoCart from '../organisme/InfoCart'
import ProductCart from '../organisme/ProductCart'

interface CartContentProps {
  redirectSearchProduct(): void
  onDelete(id: string): void
  modalOpen: boolean
  toggleModal(isOpen: boolean): any
  handleDelete(): void
}

export default function CartContent(props: CartContentProps) {
  const {
    redirectSearchProduct,
    onDelete,
    modalOpen,
    toggleModal,
    handleDelete,
  } = props
  const { cartItems } = useShoppingCart()
  return (
    <Layout>
      <FlexResponsiveDirection>
        <ContainerCartList>
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
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
          <FlexFull margin="20px 0">
            <CustomButton
              variant="outlined"
              label="Cari Produk"
              color="secondary"
              onClick={redirectSearchProduct}
            />
          </FlexFull>
        </ContainerCartList>
        <InfoCart />
      </FlexResponsiveDirection>
      <Modal
        openModal={modalOpen}
        toggleModal={toggleModal}
        modalTitle="Delete Produk"
      >
        <ModalDelete
          handleDelete={handleDelete}
          handleClose={toggleModal(false)}
        />
      </Modal>
    </Layout>
  )
}
