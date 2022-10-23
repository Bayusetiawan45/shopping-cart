import './styles.css'
import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Store from './pages/Store'
import ProductDetail from './pages/ProductDetail'
import { ShoppingCartProvider } from './context/ShoppingCartContext'
import Cart from './pages/Cart'

export const App = () => {
  return (
    <ShoppingCartProvider>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/store" element={<Store />} />
        <Route path="/store/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </ShoppingCartProvider>
  )
}
