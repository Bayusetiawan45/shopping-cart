import React from 'react'
import Layout from '../../layouts/Layout'
import { formatCurrency } from '../../utilities/formatCurrency'
import { CustomButton } from '../atoms/button'
import { FlexProductDescription, FlexProductDetail } from '../atoms/flex'
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
      <FlexProductDetail>
        <CustomImage
          src={dataDetail?.images?.[0]}
          alt="product image"
          width={300}
          height={300}
        />
        <FlexProductDescription>
          <CustomText>{dataDetail.title}</CustomText>
          <CustomText fsize={16} margin="0 0 20px 0">
            {formatCurrency(dataDetail.price)}
          </CustomText>
          <CustomButton
            variant="contained"
            label="+ Keranjang"
            onClick={onAddToCart}
            color="secondary"
          />
        </FlexProductDescription>
      </FlexProductDetail>
    </Layout>
  )
}
