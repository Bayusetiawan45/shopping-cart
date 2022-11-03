import React from 'react'
import Layout from '../../layouts/Layout'
import { formatCurrency } from '../../utilities/formatCurrency'
import { CustomButton } from '../atoms/button'
import {
  FlexClickable,
  FlexProductDescription,
  FlexProductDetail,
  FlexRowSpaceBetween,
} from '../atoms/flex'
import { CustomImage } from '../atoms/image'
import { CustomText } from '../atoms/typography'
import { IProductCard } from '../organisme/ProductCard'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'

interface ProductDetailContentProps {
  dataDetail: IProductCard
  onAddToCart(): void
  onBack(): void
  handleAddToCart(): void
}
export default function ProductDetailContent(props: ProductDetailContentProps) {
  const { dataDetail, handleAddToCart, onBack } = props
  return (
    <Layout>
      <FlexClickable onClick={onBack}>
        <ArrowBackIosIcon />
        <CustomText>Back</CustomText>
      </FlexClickable>
      <FlexProductDetail>
        <CustomImage
          src={dataDetail?.images?.[0]}
          alt="product image"
          height="400px"
          style={{ borderRadius: '10px' }}
        />
        <FlexProductDescription>
          <CustomText>{dataDetail.title}</CustomText>
          <FlexRowSpaceBetween>
            <CustomText fsize={16} margin="10px 0 20px 0">
              {formatCurrency(dataDetail.price)}
            </CustomText>
            <CustomText
              fsize={12}
              fweight={600}
              margin="10px 0 20px 0"
              style={{
                background: '#DED1FF',
                borderRadius: '8px',
                padding: '4px 8px',
              }}
            >
              Stock {dataDetail.stock}
            </CustomText>
          </FlexRowSpaceBetween>

          <CustomButton
            variant="contained"
            label="+ Keranjang"
            onClick={handleAddToCart}
            color="secondary"
          />
        </FlexProductDescription>
      </FlexProductDetail>
    </Layout>
  )
}
