import { Divider } from '@mui/material'
import React, { useEffect } from 'react'
import { useShoppingCart } from '../../context/ShoppingCartContext'
import { formatCurrency } from '../../utilities/formatCurrency'
import { FlexCartInfo, FlexRowSpaceBetween } from '../atoms/flex'
import { CustomText } from '../atoms/typography'
import { useProductService } from '../../context/ProductService'

export default function InfoCart() {
  const { cartItems, cartQuantity } = useShoppingCart()
  const { getProducts, products } = useProductService()

  useEffect(() => {
    getProducts()
  }, [])
  return (
    <FlexCartInfo>
      <CustomText fsize={14} fweight={600} color="#6B7588" margin="0 0 5px 0">
        Rincian Belanja
      </CustomText>
      <Divider />
      <FlexRowSpaceBetween>
        <CustomText fsize={14} fweight={400} color="#8F90A6" margin="5px 0">
          Total Barang
        </CustomText>
        <CustomText fsize={14} fweight={400} color="#8F90A6">
          {cartQuantity} (barang)
        </CustomText>
      </FlexRowSpaceBetween>
      <FlexRowSpaceBetween>
        <CustomText
          fsize={14}
          fweight={600}
          color="#6B7588"
          margin="10px 0 0 0"
        >
          Total Harga
        </CustomText>
        <CustomText fsize={14} fweight={600} color="#6B7588">
          {formatCurrency(
            cartItems.reduce((total, cartItem) => {
              const item = products.find(
                (item: { id: string }) => item.id === cartItem.id
              )
              return total + (item?.price || 0) * cartItem.quantity
            }, 0)
          )}
        </CustomText>
      </FlexRowSpaceBetween>
    </FlexCartInfo>
  )
}
