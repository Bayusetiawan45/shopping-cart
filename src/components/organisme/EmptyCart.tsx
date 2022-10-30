import React from 'react'
import { CustomButton } from '../atoms/button'
import { FlexEmptyCart } from '../atoms/flex'
import { CustomText } from '../atoms/typography'

interface EmptyCartProps {
  redirectSearchProduct(): void
}

export default function EmptyCart({ redirectSearchProduct }: EmptyCartProps) {
  return (
    <FlexEmptyCart>
      <CustomText fsize={16} fweight={500} color="#8F90A6" margin="10px 0">
        Keranjang Kamu Kosong
      </CustomText>
      <CustomButton
        variant="contained"
        label="Cari Produk"
        color="secondary"
        onClick={redirectSearchProduct}
      />
    </FlexEmptyCart>
  )
}
