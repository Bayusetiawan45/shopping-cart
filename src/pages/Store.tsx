import React from 'react'
import Layout from '../layouts/Layout'
import storeItems from '../data/items.json'
import ProductCard from '../components/organisme/ProductCard'
import { ContainerGrid } from '../components/atoms/container'

export default function Store() {
  return (
    <Layout>
      <ContainerGrid container gap={2}>
        {storeItems.map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </ContainerGrid>
    </Layout>
  )
}
