import './styles.css'
import { Route, Routes } from 'react-router-dom'
import Store from './pages/HomePage'
import ProductDetail from './pages/ProductDetail'
import { ShoppingCartProvider } from './context/ShoppingCartContext'
import Cart from './pages/Cart'
import ProductServiceProvider from './context/ProductService'
import Login from './pages/Login'
import AuthServiceProvider from './context/AuthService'

export const App = () => {
  return (
    <ShoppingCartProvider>
      <AuthServiceProvider>
        <ProductServiceProvider>
          <Routes>
            <Route path="/" element={<Store />} />
            <Route path="/detail/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </ProductServiceProvider>
      </AuthServiceProvider>
    </ShoppingCartProvider>
  )
}
