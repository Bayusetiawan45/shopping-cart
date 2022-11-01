import {
  Avatar,
  Box,
  Drawer,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  TextField,
} from '@mui/material'
import { Stack } from '@mui/system'
import { useEffect, useMemo, useState } from 'react'
import { ContainerProductSearch, NavbarContainer } from '../atoms/container'
import MenuIcon from '@mui/icons-material/Menu'
import { useNavigate } from 'react-router-dom'
import { CustomButton } from '../atoms/button'
import CartBadge from '../molecules/CartBadge'
import { CustomText } from '../atoms/typography'
import { FlexClickable, FlexListContent } from '../atoms/flex'
import { userLogin } from '../../utilities/userLogin'
import { useAuthService } from '../../context/AuthService'
import { Logout } from '@mui/icons-material'
import Modal from '../atoms/modal'
import useDebounce from '../../hooks/useDebounce'
import { useProductService } from '../../context/ProductService'
import { ResultLableQuery } from '../atoms/custom-element'
import { CustomImage } from '../atoms/image'

interface Props {
  window?: () => Window
}
const drawerWidth = 240

export default function NavBar({ window }: Props) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [modalSearch, setModalSearch] = useState(false)
  const [query, setQuery] = useState('')
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const navigate = useNavigate()
  const { handleLogout, getUser, user } = useAuthService()
  const { products, getProducts } = useProductService()
  const isLogin = userLogin()

  const debounceSearch = useDebounce(query, query ? 500 : 0)
  const userId = localStorage.getItem('user_id')
  const container =
    window !== undefined ? () => window().document.body : undefined

  const searchItems = useMemo(() => {
    return products.filter((item: { title: string }) => {
      return item.title.toLowerCase().includes(debounceSearch.toLowerCase())
    })
  }, [debounceSearch, products])

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const toggleModalSearch = (isOpen: boolean) => () => {
    setModalSearch(isOpen)
  }

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const { value } = e.target
    if (value.length > 0) {
      setModalSearch(true)
    } else setModalSearch(false)
    setQuery(value)
  }

  useEffect(() => {
    if (userId) getUser(userId)
    getProducts()
  }, [])

  return (
    <Box
      bgcolor="white"
      boxShadow="0px 4px 4px rgba(123,77,255, 0.3)"
      borderRadius="10px"
    >
      <NavbarContainer>
        <FlexClickable onClick={() => navigate('/')}>
          <CustomText fweight={900} fsize={30} color="#7B4DFF">
            ShopCart
          </CustomText>
        </FlexClickable>
        <TextField
          color="secondary"
          id="search"
          label="Search Product"
          variant="outlined"
          type="search"
          size="small"
          style={{
            background: 'white',
            border: 'none',
            width: '70%',
            fontSize: '12px',
            margin: '0 10px',
          }}
          onChange={onSearchChange}
        />
        <Stack
          spacing={{ md: 1, sm: 0 }}
          direction="row"
          alignItems="center"
          sx={{ display: { sm: 'flex', xs: 'none' } }}
        >
          <CartBadge />
          {isLogin ? (
            <>
              <IconButton color="secondary" onClick={handleClick}>
                <Avatar sx={{ width: 24, height: 24 }} />
              </IconButton>
              <CustomText
                fsize={12}
                style={{
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  maxWidth: '60px',
                  whiteSpace: 'nowrap',
                  textTransform: 'capitalize',
                }}
              >
                {user?.name}
              </CustomText>
            </>
          ) : (
            <>
              <CustomButton
                variant="contained"
                color="secondary"
                label="Login"
                onClick={() => navigate('/login')}
              />
              <CustomButton
                variant="outlined"
                color="secondary"
                label="Register"
                onClick={() => navigate('/register')}
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
          {/* <DrawerHeader onClick={handleDrawerToggle} navItems={navItems} /> */}
        </Drawer>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
      >
        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
      <Modal
        openModal={modalSearch}
        toggleModal={toggleModalSearch}
        modalTitle="Search Product"
      >
        <FlexListContent>
          {searchItems.length > 0 ? (
            <>
              {query && (
                <CustomText fsize={14} color="#8F90A6" margin="0 0 10px 0">
                  Menampilkan {searchItems.length !== 1 && <span>1 -</span>}{' '}
                  {searchItems.length} produk untuk{' '}
                  <ResultLableQuery>{query}</ResultLableQuery>
                </CustomText>
              )}
              {searchItems.map((item: any) => (
                <ContainerProductSearch key={item.id}>
                  <CustomImage
                    src={item?.images?.[0]}
                    alt="product image"
                    width={50}
                    height={50}
                    style={{ borderRadius: '5px' }}
                  />
                  <CustomText fweight={500} fsize={14} margin="0 10px">
                    {item?.title}
                  </CustomText>
                </ContainerProductSearch>
              ))}
            </>
          ) : (
            <CustomText fsize={14} color="#8F90A6" margin="10px 0">
              Produk tidak ada dalam pencarian
            </CustomText>
          )}
        </FlexListContent>
      </Modal>
    </Box>
  )
}
