import { CardActionArea, CardContent, CardMedia } from '@mui/material'
import { formatCurrency } from '../../utilities/formatCurrency'
import { FlexProductCard } from '../atoms/flex'
import { CustomText } from '../atoms/typography'

export interface IProductCard {
  id: string
  title: string
  price: number
  images: string[]
  stock: number
}

interface ProductCardProps extends IProductCard {
  redirectToDetail(id: string): void
}

export default function ProductCard(props: ProductCardProps) {
  const { id, title, price, images, redirectToDetail } = props
  return (
    <FlexProductCard onClick={() => redirectToDetail(id)}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="160"
          image={images[0]}
          alt="product image"
        />
        <CardContent sx={{ padding: '10px' }}>
          <CustomText
            fweight={500}
            fsize={14}
            margin="0 0 10px 0"
            style={{
              textOverflow: 'ellipsis',
              overflow: 'hidden',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
            }}
          >
            {title}
          </CustomText>
          <CustomText fweight={600} fsize={16}>
            {formatCurrency(price)}
          </CustomText>
        </CardContent>
      </CardActionArea>
    </FlexProductCard>
  )
}
