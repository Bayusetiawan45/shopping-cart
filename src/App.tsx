import './styles.css'
import { Route, Routes } from 'react-router-dom'
import Store from './pages/HomePage'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Register from './pages/Register'

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Store />} />
      <Route path="/detail/:id" element={<ProductDetail />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  )
}
