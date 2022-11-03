import React, { ReactNode } from 'react'
import AuthServiceProvider from './AuthService'
import CartServiceProvider from './CartService'
import ProductServiceProvider from './ProductService'
import { ShoppingCartProvider } from './ShoppingCartContext'

type IndexProps = {
  children: ReactNode
}
const DataProvider = ({ children }: IndexProps) => {
  return (
    <AuthServiceProvider>
      <ProductServiceProvider>
        <ShoppingCartProvider>
          <CartServiceProvider>{children}</CartServiceProvider>
        </ShoppingCartProvider>
      </ProductServiceProvider>
    </AuthServiceProvider>
  )
}

export default DataProvider
