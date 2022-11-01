import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CartContent from '../components/page-components/CartContent'
import { useShoppingCart } from '../context/ShoppingCartContext'

export default function Cart() {
  const navigate = useNavigate()
  const [modalOpen, setModalOpen] = useState(false)
  const [deleteId, setDeleteId] = useState<string>()
  const { removeFromCart } = useShoppingCart()

  const redirectSearchProduct = () => {
    navigate('/')
  }

  const onDelete = (id: string) => {
    setDeleteId(id)
    setModalOpen(true)
  }

  const onBack = () => {
    navigate('/')
  }

  const toggleModal = (isOpen: boolean) => () => {
    setModalOpen(isOpen)
  }

  const handleDelete = () => {
    if (deleteId) removeFromCart(deleteId)
    setModalOpen(false)
  }

  return (
    <CartContent
      redirectSearchProduct={redirectSearchProduct}
      modalOpen={modalOpen}
      onDelete={onDelete}
      toggleModal={toggleModal}
      handleDelete={handleDelete}
      onBack={onBack}
    />
  )
}
