import { useEffect, useMemo, useState } from 'react'
import useDebounce from '../hooks/useDebounce'
import HomePageContent from '../components/page-components/HomePageContent'
import { useNavigate } from 'react-router-dom'
import { useProductService } from '../context/ProductService'

export default function HomePage() {
  const navigate = useNavigate()
  const [query, setQuery] = useState('')
  const { products, getProducts } = useProductService()

  const debounceSearch = useDebounce(query, query ? 500 : 0)

  const filteredItems = useMemo(() => {
    return products.filter((item: { title: string }) => {
      return item.title.toLowerCase().includes(debounceSearch.toLowerCase())
    })
  }, [debounceSearch, products])

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const { value } = e.target
    setQuery(value)
  }

  const redirectToDetail = (id: number) => {
    navigate(`/detail/${id}`)
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <HomePageContent
      filteredItems={filteredItems}
      onSearchChange={onSearchChange}
      query={query}
      redirectToDetail={redirectToDetail}
    />
  )
}
