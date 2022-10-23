import React, { ReactNode } from 'react'
import { CustomContainer } from '../components/atoms/container'
import NavBar from '../components/organisme/Navbar'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <NavBar />
      <CustomContainer>{children}</CustomContainer>
    </div>
  )
}

export default Layout
