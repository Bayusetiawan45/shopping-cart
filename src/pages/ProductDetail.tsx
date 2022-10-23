import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { CustomButton } from '../components/atoms/button'
import { CustomImage } from '../components/atoms/image'
import { CustomText } from '../components/atoms/typography'
import storeItems from '../data/items.json'
import Layout from '../layouts/Layout'
import { formatCurrency } from '../utilities/formatCurrency'
import { useShoppingCart } from '../context/ShoppingCartContext'

type ProductParams = {
  id: string
}

export default function ProductDetail() {
  const { id } = useParams<ProductParams>()
  const navigate = useNavigate()
  const dataProduct = storeItems.filter((item) => {
    if (id) return item.id == parseInt(id)
  })
  const { name, price, imageUrl } = dataProduct[0]

  const { increaseCartQuantity } = useShoppingCart()

  const onAddToCart = () => {
    if (id) {
      increaseCartQuantity(parseInt(id))
    }
    setTimeout(() => {
      navigate('/cart')
    }, 500)
  }

  return (
    <Layout>
      <CustomImage
        src={imageUrl}
        alt="product image"
        width={300}
        height={300}
      />
      <CustomText>{name}</CustomText>
      <CustomText margin="0 0 20px 0">{formatCurrency(price)}</CustomText>
      <CustomButton
        variant="contained"
        label="Add To Cart"
        onClick={onAddToCart}
      />
    </Layout>
  )
}
