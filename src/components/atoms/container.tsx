import styled from '@emotion/styled'
import { Grid } from '@mui/material'

export const CustomContainer = styled.div`
  align-self: center;
  width: 80%;
  margin-top: 30px;
  @media (max-width: 600px) {
    width: 95%;
  }
`

export const NavbarContainer = styled(CustomContainer)`
  display: flex;
  height: 72px;
  justify-content: space-between;
  margin: 0px auto;
  align-items: center;
`
export const ContainerGrid = styled(Grid)`
  width: 100%;
  box-sizing: border-box;
  margin-left: 0px;
  margin-top: 0px;
  padding: 10px 0;
`
export const ContainerQty = styled.div`
  display: flex;
  align-items: center;
`

export const ContainerCardContent = styled.div`
  width: 100%;
  margin-left: 10px;
`
export const ContainerCartList = styled(Grid)`
  width: 90%;
  @media (max-width: 600px) {
    width: 95%;
  }
`
export const ContainerHeaderModal = styled(ContainerQty)`
  justify-content: space-between;
  padding: 16px;
  color: purple;
`
