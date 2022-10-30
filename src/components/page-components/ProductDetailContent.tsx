import React from 'react'
import Layout from '../../layouts/Layout'
import { formatCurrency } from '../../utilities/formatCurrency'
import { CustomButton } from '../atoms/button'
import { CustomImage } from '../atoms/image'
import { CustomText } from '../atoms/typography'
import { IProductCard } from '../organisme/ProductCard'

interface ProductDetailContentProps {
  dataDetail: IProductCard
  onAddToCart(): void
}
export default function ProductDetailContent(props: ProductDetailContentProps) {
  const { dataDetail, onAddToCart } = props
  return (
    <Layout>
      <CustomImage
        src={dataDetail?.images?.[0]}
        alt="product image"
        width={300}
        height={300}
      />
      <CustomText>{dataDetail.title}</CustomText>
      <CustomText margin="0 0 20px 0">
        {formatCurrency(dataDetail.price)}
      </CustomText>
      <CustomButton
        variant="contained"
        label="Add To Cart"
        onClick={onAddToCart}
        color="secondary"
      />
    </Layout>
  )
}
