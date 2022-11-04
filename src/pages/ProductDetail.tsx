import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useShoppingCart } from '../context/ShoppingCartContext'
import ProductDetailContent from '../components/page-components/ProductDetailContent'
import { useProductService } from '../context/ProductService'
import { useCartService } from '../context/CartService'

type ProductParams = {
  id: string
}

export default function ProductDetail() {
  const { id } = useParams<ProductParams>()
  const { getProductsDetails, details } = useProductService()
  const { addToCart } = useCartService()
  const navigate = useNavigate()
  const userId = localStorage.getItem('user_id')

  const { increaseCartQuantity } = useShoppingCart()

  const onAddToCart = () => {
    if (id) {
      increaseCartQuantity(id)
    }
    setTimeout(() => {
      navigate('/cart')
    }, 500)
  }

  const onBack = () => {
    navigate('/')
  }

  const handleAddToCart = () => {
    if (!id || !userId) return
    const data = {
      user_id: userId,
      cart_items: {
        product: id,
        quantity: 1,
      },
    }
    addToCart(data)
  }

  useEffect(() => {
    if (id) getProductsDetails(id)
  }, [])

  return (
    <ProductDetailContent
      dataDetail={details}
      onAddToCart={onAddToCart}
      onBack={onBack}
      handleAddToCart={handleAddToCart}
    />
  )
}
