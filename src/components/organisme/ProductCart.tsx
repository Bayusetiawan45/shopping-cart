import { Button } from '@mui/material'
import React, { useEffect } from 'react'
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
import { CustomImage } from '../atoms/image'
import { formatCurrency } from '../../utilities/formatCurrency'
import { useProductService } from '../../context/ProductService'
// import { useCartService } from '../../context/CartService'

interface ProductCartProps {
  product_id: string
  id: string
  onDelete(id: string): void
  modalOpen: boolean
  toggleModal(isOpen: boolean): any
  handleDelete(): void
}

export default function ProductCart(props: ProductCartProps) {
  const { product_id, id, onDelete } = props
  const { products, getProducts } = useProductService()
  const item = products.find((item: { id: string }) => item.id === product_id)

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <FlexProductCart>
      <FlexRow>
        <CustomImage
          src={item?.images?.[0]}
          alt="product image"
          width={100}
          height={100}
          style={{ borderRadius: '5px' }}
        />
        <ContainerCardContent>
          <FlexRowSpaceBetween>
            <CustomText fweight={500} fsize={16}>
              {item?.title}
            </CustomText>
            <Button aria-label="reduce">
              <DeleteIcon
                fontSize="small"
                color="error"
                onClick={() => onDelete(id)}
              />
            </Button>
          </FlexRowSpaceBetween>
          <CustomText fweight={500} fsize={16} margin="10px 0">
            {formatCurrency(item?.price ?? 0)}
          </CustomText>
          <FlexEnd>
            <ContainerQty>
              <Button
                aria-label="reduce"
                color="secondary"
                // onClick={() => decreaseCartQuantity(id)}
                // disabled={getItemQuantity(id) === 1}
              >
                <RemoveIcon fontSize="small" />
              </Button>
              <CustomText fsize={14} fweight={400} margin="0 10px">
                {/* {getItemQuantity(id)} */}
              </CustomText>
              <Button
                aria-label="increase"
                color="secondary"
                // onClick={() => increaseCartQuantity(id)}
                // disabled={getItemQuantity(id) >= item?.stock}
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
