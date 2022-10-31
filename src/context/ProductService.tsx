import React, { createContext, ReactNode, useContext, useState } from 'react'
import { _AxiosService } from '../config/axios.config'

type ProductServiceProviderProps = {
  children: ReactNode
}

type ProducServiceContext = {
  products: any
  details: any
  getProducts(): any
  getProductsDetails(id: string): any
}

const ProducServiceContext = createContext({} as ProducServiceContext)

export function useProductService() {
  return useContext(ProducServiceContext)
}

export default function ProductServiceProvider({
  children,
}: ProductServiceProviderProps) {
  const [products, setProducts] = useState([])
  const [details, setDetails] = useState([])

  const getProducts = async () => {
    try {
      const results = await _AxiosService.get('products')
      setProducts(results.data)
    } catch (err) {
      console.log(err)
    }
  }

  const getProductsDetails = async (id: string) => {
    try {
      const results = await _AxiosService.get(`products/${id}`)
      setDetails(results.data)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <ProducServiceContext.Provider
      value={{ products, getProducts, getProductsDetails, details }}
    >
      {children}
    </ProducServiceContext.Provider>
  )
}
