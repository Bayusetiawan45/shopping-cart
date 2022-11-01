import * as React from 'react'
import Badge, { BadgeProps } from '@mui/material/Badge'
import { styled } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { useShoppingCart } from '../../context/ShoppingCartContext'
import { useNavigate } from 'react-router-dom'

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))

export default function CartBadge() {
  const { cartQuantity } = useShoppingCart()
  const navigate = useNavigate()
  return (
    <IconButton aria-label="cart" onClick={() => navigate('/cart')}>
      <StyledBadge badgeContent={cartQuantity} color="secondary">
        <ShoppingCartIcon color="inherit" />
      </StyledBadge>
    </IconButton>
  )
}
