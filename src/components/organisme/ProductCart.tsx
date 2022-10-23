import { Button } from '@mui/material'
import React from 'react'
import { ContainerCardContent, ContainerQty } from '../atoms/container'
import {
  FlexEnd,
  FlexProductCart,
  FlexRow,
  FlexRowSpaceBetween,
} from '../atoms/flex'
import { CustomText } from '../atoms/typography'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import DeleteIcon from '@mui/icons-material/Delete'
import { useShoppingCart } from '../../context/ShoppingCartContext'
import { CustomImage } from '../atoms/image'
import storeItems from '../../data/items.json'
import { formatCurrency } from '../../utilities/formatCurrency'

interface ProductCartProps {
  id: number
}

export default function ProductCart({ id }: ProductCartProps) {
  const {
    decreaseCartQuantity,
    increaseCartQuantity,
    getItemQuantity,
    removeFromCart,
  } = useShoppingCart()

  const item = storeItems.find((item) => item.id === id)
  if (item === null) return null

  return (
    <FlexProductCart>
      <FlexRow>
        <CustomImage
          src={item?.imageUrl}
          alt="product image"
          width={100}
          height={100}
        />
        <ContainerCardContent>
          <FlexRowSpaceBetween>
            <CustomText fweight={500} fsize={16} ffamily="Inter">
              {item?.name}
            </CustomText>
            <Button aria-label="reduce" onClick={() => removeFromCart(id)}>
              <DeleteIcon fontSize="small" color="error" />
            </Button>
          </FlexRowSpaceBetween>
          <CustomText fweight={500} fsize={16} ffamily="Inter" margin="10px 0">
            {formatCurrency(item?.price ?? 0)}
          </CustomText>
          <FlexEnd>
            <ContainerQty>
              <Button
                aria-label="reduce"
                color="secondary"
                onClick={() => decreaseCartQuantity(id)}
              >
                <RemoveIcon fontSize="small" />
              </Button>
              <CustomText fsize={14} fweight={400} margin="0 10px">
                {getItemQuantity(id)}
              </CustomText>
              <Button
                aria-label="increase"
                color="secondary"
                onClick={() => increaseCartQuantity(id)}
              >
                <AddIcon fontSize="small" />
              </Button>
            </ContainerQty>
          </FlexEnd>
        </ContainerCardContent>
      </FlexRow>
    </FlexProductCart>
  )
}
