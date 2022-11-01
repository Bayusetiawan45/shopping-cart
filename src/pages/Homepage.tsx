import { useEffect } from 'react'
import HomePageContent from '../components/page-components/HomePageContent'
import { useNavigate } from 'react-router-dom'
import { useProductService } from '../context/ProductService'

export default function HomePage() {
  const navigate = useNavigate()
  const { products, getProducts } = useProductService()

  const redirectToDetail = (id: string) => {
    navigate(`/detail/${id}`)
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <HomePageContent products={products} redirectToDetail={redirectToDetail} />
  )
}
