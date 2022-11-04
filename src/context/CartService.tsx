import React, { createContext, ReactNode, useContext, useState } from 'react'
import { _AxiosService } from '../config/axios.config'
import { useNavigate } from 'react-router-dom'

type CartServiceProviderProps = {
  children: ReactNode
}

type CartServiceContext = {
  addToCart(data: CartData): void
  getCartList(): void
  cartList: any
  getUserCartList(): void
  userCart: any
  deleteProductFromCart(id: string): void
}

export type CartData = {
  user_id: string
  cart_items: any
}

const CartServiceContext = createContext({} as CartServiceContext)

export function useCartService() {
  return useContext(CartServiceContext)
}

export default function CartServiceProvider({
  children,
}: CartServiceProviderProps) {
  const navigate = useNavigate()
  const [cartList, setCartList] = useState([])
  const [userCart, setUserCart] = useState([])

  const addToCart = async (data: CartData) => {
    try {
      const results = await _AxiosService.post('carts/add-to-cart', data)
      if (results.status === 201) {
        navigate('/cart')
      }
    } catch (err) {
      console.log(err)
    }
  }
  const getCartList = async () => {
    try {
      const results = await _AxiosService.get('carts')
      setCartList(results.data)
    } catch (err) {
      console.log(err)
    }
  }
  const getUserCartList = async () => {
    try {
      const user_id = localStorage.getItem('user_id')
      const results = await _AxiosService.get(`carts/user-cart/${user_id}`)
      setUserCart(results.data)
    } catch (err) {
      console.log(err)
    }
  }
  const deleteProductFromCart = async (id: string) => {
    try {
      await _AxiosService.delete(`carts/remove-from-cart/${id}`)
      getUserCartList()
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <CartServiceContext.Provider
      value={{
        addToCart,
        getCartList,
        cartList,
        getUserCartList,
        userCart,
        deleteProductFromCart,
      }}
    >
      {children}
    </CartServiceContext.Provider>
  )
}
