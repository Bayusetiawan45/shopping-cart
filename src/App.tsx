import './styles.css'
import { Route, Routes } from 'react-router-dom'
import Store from './pages/HomePage'
import ProductDetail from './pages/ProductDetail'
import { ShoppingCartProvider } from './context/ShoppingCartContext'
import Cart from './pages/Cart'
import ProductServiceProvider from './context/ProductService'

export const App = () => {
  return (
    <ShoppingCartProvider>
      <ProductServiceProvider>
        <Routes>
          <Route path="/" element={<Store />} />
          <Route path="/detail/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </ProductServiceProvider>
    </ShoppingCartProvider>
  )
}
