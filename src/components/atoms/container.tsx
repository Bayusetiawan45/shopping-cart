import styled from '@emotion/styled'
import { Grid } from '@mui/material'

export const CustomContainer = styled.div`
  align-self: center;
  width: 80%;
  margin-top: 90px;
  @media (max-width: 600px) {
    width: 95%;
  }
`

export const NavbarContainer = styled(CustomContainer)`
  display: flex;
  height: 72px;
  justify-content: space-evenly;
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
export const ContainerSlider = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (max-width: 600px) {
    width: 95%;
  }
`
export const ContainerBanner = styled.div`
  align-items: center;
  display: flex !important;
  justify-content: center;
  border-radius: 15px;
  width: 99% !important;
  height: 100%;
  position: relative;
  outline: none;
  cursor: pointer;
  @media (max-width: 600px) {
    margin-left: -20px;
    height: 100px;
  }
`
export const ContainerCenter = styled.div`
  display: flex;
  justify-content: center;
  margin-top: auto;
`
export const SkeletonContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 10px;
`
export const ContainerProductSearch = styled.div`
  display: flex;
  width: 100%;
  fled-direction: row;
  margin: 5px 0;
  padding: 5px;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    background: rgba(123, 77, 255, 0.1);
  }
`
