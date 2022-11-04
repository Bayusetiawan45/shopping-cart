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
import { useCartService } from '../../context/CartService'
// import { useCartService } from '../../context/CartService'

interface ProductCartProps {
  product: string
  _id: string
  onDelete(id: string): void
  modalOpen: boolean
  toggleModal(isOpen: boolean): any
  handleDelete(): void
  quantity: number
}

export default function ProductCart(props: ProductCartProps) {
  const { product, onDelete, quantity } = props
  const { products, getProducts } = useProductService()
  const { updateQuantity } = useCartService()
  const item = products.find((item: { id: string }) => item.id === product)
  // const [cartItems, setCartItems] = useState(
  //   userCart[0].cart_items.find(
  //     (item: { product: string }) => item.product === product
  //   )
  // )

  const handleUpdateQty = (action: string) => {
    updateQuantity(product, action)
  }

  // setCartItems((prev: { quantity: number }) => ({
  //   ...prev,
  //   quantity: prev.quantity + 1,
  // }))

  // setCartItems((currItems: any[]) => {
  //   if (currItems.find((item) => item.product === product) == null) {
  //     return [...currItems, { product, quantity: 1 }]
  //   } else {
  //     return currItems.map((item) => {
  //       if (item.product === product) {
  //         return { ...item, quantity: item.quantity + 1 }
  //       } else {
  //         return item
  //       }
  //     })
  //   }
  // })

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
                onClick={() => onDelete(product)}
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
                onClick={() => handleUpdateQty('decrease')}
                disabled={quantity <= 1}
              >
                <RemoveIcon fontSize="small" />
              </Button>
              <CustomText fsize={14} fweight={400} margin="0 10px">
                {quantity}
              </CustomText>
              <Button
                aria-label="increase"
                color="secondary"
                onClick={() => handleUpdateQty('increase')}
                disabled={quantity >= item?.stock}
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
