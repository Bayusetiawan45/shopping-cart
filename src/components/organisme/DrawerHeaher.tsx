import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { FlexClickable } from '../atoms/flex'
import { CustomText } from '../atoms/typography'
import { INavItem } from './Navbar'

type IDrawerHeaderProps = {
  onClick?: () => void
  navItems: INavItem[]
}

export default function DrawerHeader(props: IDrawerHeaderProps) {
  const { onClick, navItems } = props
  const navigate = useNavigate()
  return (
    <Box onClick={onClick} sx={{ textAlign: 'center' }}>
      <FlexClickable onClick={() => navigate('/')}>
        <CustomText fweight={700} fsize={30} ffamily="Inter">
          Shopping Cart
        </CustomText>
      </FlexClickable>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.title} disablePadding>
            <ListItemButton
              sx={{
                textAlign: 'center',
                fontFamily: 'Poppins',
                color: 'gray',
              }}
            >
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )
}
