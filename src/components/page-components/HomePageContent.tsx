import React from 'react'
import Layout from '../../layouts/Layout'
import { ContainerGrid } from '../atoms/container'
import { CustomText } from '../atoms/typography'
import ProductCard, { IProductCard } from '../organisme/ProductCard'
import Banner from '../organisme/Banner'

interface HomePageContentProps {
  products: IProductCard[]
  redirectToDetail(id: string): void
}

export default function HomePageContent(props: HomePageContentProps) {
  const { products, redirectToDetail } = props
  return (
    <Layout>
      <Banner />
      <CustomText fsize={22} margin="20px 0 0 0">
        Product List
      </CustomText>
      <ContainerGrid container gap={2}>
        {products.map((item) => (
          <ProductCard
            key={item.id}
            redirectToDetail={redirectToDetail}
            {...item}
          />
        ))}
      </ContainerGrid>
    </Layout>
  )
}
