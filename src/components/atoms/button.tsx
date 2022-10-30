import { Button } from '@mui/material'
import React from 'react'

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  variant?: 'text' | 'outlined' | 'contained'
  label: string
  color?: 'primary' | 'secondary' | 'inherit'
}

export const CustomButton = ({
  variant,
  label,
  onClick,
  color,
}: ButtonProps) => {
  return (
    <Button variant={variant} onClick={onClick} color={color}>
      <span style={{ textTransform: 'capitalize' }}>{label}</span>
    </Button>
  )
}
