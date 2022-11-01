import React, { ReactNode } from 'react'
import AuthServiceProvider from './AuthService'
import ProductServiceProvider from './ProductService'
import { ShoppingCartProvider } from './ShoppingCartContext'

type IndexProps = {
  children: ReactNode
}
const DataProvider = ({ children }: IndexProps) => {
  return (
    <AuthServiceProvider>
      <ProductServiceProvider>
        <ShoppingCartProvider>{children}</ShoppingCartProvider>
      </ProductServiceProvider>
    </AuthServiceProvider>
  )
}

export default DataProvider
