import { CardActionArea, CardContent, CardMedia } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { formatCurrency } from '../../utilities/formatCurrency'
import { FlexProductCard } from '../atoms/flex'
import { CustomText } from '../atoms/typography'

interface ProductCardProps {
  id: number
  name: string
  price: number
  imageUrl: string
}

export default function ProductCard(props: ProductCardProps) {
  const { id, name, price, imageUrl } = props
  const navigate = useNavigate()
  return (
    <FlexProductCard onClick={() => navigate(`/store/${id}`)}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={imageUrl}
          alt="product image"
        />
        <CardContent>
          <CustomText
            fweight={500}
            fsize={15}
            ffamily="Inter"
            margin="0 0 10px 0"
            style={{
              textOverflow: 'ellipsis',
              overflow: 'hidden',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
            }}
          >
            {name}
          </CustomText>
          <CustomText fweight={600} fsize={16} ffamily="Inter">
            {formatCurrency(price)}
          </CustomText>
        </CardContent>
      </CardActionArea>
    </FlexProductCard>
  )
}
