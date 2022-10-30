import { CardActionArea, CardContent, CardMedia } from '@mui/material'
import { formatCurrency } from '../../utilities/formatCurrency'
import { FlexProductCard } from '../atoms/flex'
import { CustomText } from '../atoms/typography'

export interface IProductCard {
  id: string
  title: string
  price: number
  images: string[]
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
          height="140"
          image={images[0]}
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
            {title}
          </CustomText>
          <CustomText fweight={600} fsize={16} ffamily="Inter">
            {formatCurrency(price)}
          </CustomText>
        </CardContent>
      </CardActionArea>
    </FlexProductCard>
  )
}
