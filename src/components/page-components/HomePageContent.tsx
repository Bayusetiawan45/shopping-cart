import { TextField } from '@mui/material'
import React from 'react'
import Layout from '../../layouts/Layout'
import { ContainerGrid } from '../atoms/container'
import { ResultLableQuery } from '../atoms/custom-element'
import { CustomText } from '../atoms/typography'
import ProductCard, { IProductCard } from '../organisme/ProductCard'

interface HomePageContentProps {
  filteredItems: IProductCard[]
  onSearchChange(e: React.ChangeEvent<HTMLInputElement>): void
  query: string
  redirectToDetail(id: number): void
}

export default function HomePageContent(props: HomePageContentProps) {
  const { filteredItems, onSearchChange, query, redirectToDetail } = props
  return (
    <Layout>
      <TextField
        id="searc"
        label="Search Product"
        variant="outlined"
        fullWidth
        type="search"
        size="small"
        value={query}
        onChange={onSearchChange}
      />
      {filteredItems.length > 0 ? (
        <>
          {query && (
            <CustomText fsize={14} color="#8F90A6" margin="10px 0">
              Menampilkan {filteredItems.length !== 1 && <span>1 -</span>}{' '}
              {filteredItems.length} produk untuk{' '}
              <ResultLableQuery>{query}</ResultLableQuery>
            </CustomText>
          )}
          <ContainerGrid container gap={2}>
            {filteredItems.map((item) => (
              <ProductCard
                key={item.id}
                redirectToDetail={redirectToDetail}
                {...item}
              />
            ))}
          </ContainerGrid>
        </>
      ) : (
        <CustomText fsize={14} color="#8F90A6" margin="10px 0">
          Produk tidak ada dalam pencarian
        </CustomText>
      )}
    </Layout>
  )
}
