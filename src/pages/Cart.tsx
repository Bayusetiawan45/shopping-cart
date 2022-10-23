import React from 'react'
import { CustomText } from '../components/atoms/typography'
import ProductCart from '../components/organisme/ProductCart'
import { useShoppingCart } from '../context/ShoppingCartContext'
import Layout from '../layouts/Layout'
import { formatCurrency } from '../utilities/formatCurrency'
import storeItems from '../data/items.json'
import {
  FlexCartInfo,
  FlexResponsiveDirection,
  FlexRowSpaceBetween,
} from '../components/atoms/flex'
import { Divider } from '@mui/material'
import { ContainerCartList } from '../components/atoms/container'

export default function Cart() {
  const { cartItems, cartQuantity } = useShoppingCart()
  return (
    <Layout>
      <FlexResponsiveDirection>
        <ContainerCartList>
          {cartItems.map((item) => (
            <ProductCart key={item.id} {...item} />
          ))}
        </ContainerCartList>
        <FlexCartInfo>
          <CustomText
            fsize={14}
            fweight={600}
            color="#6B7588"
            margin="0 0 5px 0"
          >
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
                  const item = storeItems.find(
                    (item) => item.id === cartItem.id
                  )
                  return total + (item?.price || 0) * cartItem.quantity
                }, 0)
              )}
            </CustomText>
          </FlexRowSpaceBetween>
        </FlexCartInfo>
      </FlexResponsiveDirection>
    </Layout>
  )
}
