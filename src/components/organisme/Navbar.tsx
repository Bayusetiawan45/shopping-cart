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
import { userLogin } from '../../utilities/userLogin'

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
  const isLogin = userLogin()

  const navItems: INavItem[] = [
    {
      title: 'My Order',
      path: '/',
    },
  ]

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const container =
    window !== undefined ? () => window().document.body : undefined

  return (
    <Box
      bgcolor="#7c4dff"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.1)"
      borderRadius="10px"
    >
      <NavbarContainer>
        <FlexClickable onClick={() => navigate('/')}>
          <CustomText fweight={900} fsize={30} color="white">
            Shopping Cart
          </CustomText>
        </FlexClickable>
        <Stack
          spacing={{ md: 2, sm: 0 }}
          direction="row"
          alignItems="center"
          sx={{ display: { sm: 'flex', xs: 'none' } }}
        >
          <CartBadge />
          {isLogin ? (
            navItems.map((item) => (
              <CustomButton
                key={item.path}
                variant="text"
                color="primary"
                label={item.title}
                onClick={() => navigate(item.path)}
              />
            ))
          ) : (
            <>
              <CustomButton
                variant="contained"
                color="primary"
                label="Login"
                onClick={() => navigate('/login')}
              />
              <CustomButton
                variant="outlined"
                color="primary"
                label="Register"
                onClick={() => navigate('/login')}
              />
            </>
          )}
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
