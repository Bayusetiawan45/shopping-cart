import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useShoppingCart } from '../context/ShoppingCartContext'
import ProductDetailContent from '../components/page-components/ProductDetailContent'
import { useProductService } from '../context/ProductService'

type ProductParams = {
  id: string
}

export default function ProductDetail() {
  const { id } = useParams<ProductParams>()
  const { getProductsDetails, details } = useProductService()
  const navigate = useNavigate()

  const { increaseCartQuantity } = useShoppingCart()

  const onAddToCart = () => {
    if (id) {
      increaseCartQuantity(id)
    }
    setTimeout(() => {
      navigate('/cart')
    }, 500)
  }

  useEffect(() => {
    if (id) getProductsDetails(id)
  }, [])

  return <ProductDetailContent dataDetail={details} onAddToCart={onAddToCart} />
}
