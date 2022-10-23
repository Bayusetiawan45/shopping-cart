import { Box, Drawer } from '@mui/material'
import { Stack } from '@mui/system'
import { useState } from 'react'
import { NavbarContainer } from '../atoms/container'
import MenuIcon from '@mui/icons-material/Menu'
import DrawerHeader from './DrawerHeaher'
import { useNavigate } from 'react-router-dom'
import { CustomButton } from '../atoms/button'
import CartBadge from '../molecules/CartBadge'
import { CustomText } from '../atoms/typography'
import { FlexClickable } from '../atoms/flex'

export interface INavItem {
  title: string
  path: string
}

interface Props {
  window?: () => Window
}
const drawerWidth = 240

export default function NavBar({ window }: Props) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const navigate = useNavigate()

  const navItems: INavItem[] = [
    {
      title: 'Home',
      path: '/',
    },
    {
      title: 'Store',
      path: '/store',
    },
  ]

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const container =
    window !== undefined ? () => window().document.body : undefined

  return (
    <Box bgcolor="white">
      <NavbarContainer>
        <FlexClickable onClick={() => navigate('/')}>
          <CustomText fweight={700} fsize={30} ffamily="Inter">
            Shopping Cart
          </CustomText>
        </FlexClickable>
        <Stack
          spacing={{ md: 2, sm: 0 }}
          direction="row"
          alignItems="center"
          sx={{ display: { sm: 'flex', xs: 'none' } }}
        >
          {navItems.map((item) => (
            <CustomButton
              key={item.path}
              variant="text"
              color="secondary"
              label={item.title}
              onClick={() => navigate(item.path)}
            />
          ))}
          <CartBadge />
        </Stack>
        <Box
          color="secondary"
          alignSelf="center"
          onClick={handleDrawerToggle}
          sx={{ display: { sm: 'none' } }}
        >
          <MenuIcon />
        </Box>
      </NavbarContainer>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          <DrawerHeader onClick={handleDrawerToggle} navItems={navItems} />
        </Drawer>
      </Box>
    </Box>
  )
}
