import { Divider } from '@mui/material'
import React from 'react'
import { useShoppingCart } from '../../context/ShoppingCartContext'
import { formatCurrency } from '../../utilities/formatCurrency'
import { FlexCartInfo, FlexRowSpaceBetween } from '../atoms/flex'
import { CustomText } from '../atoms/typography'
import storeItems from '../../data/items.json'

export default function InfoCart() {
  const { cartItems, cartQuantity } = useShoppingCart()
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
              const item = storeItems.find((item) => item.id === cartItem.id)
              return total + (item?.price || 0) * cartItem.quantity
            }, 0)
          )}
        </CustomText>
      </FlexRowSpaceBetween>
    </FlexCartInfo>
  )
}
