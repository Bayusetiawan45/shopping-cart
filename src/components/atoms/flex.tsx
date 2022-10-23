import styled from '@emotion/styled'
import { Card } from '@mui/material'

export const Flex = styled.div`
  -js-display: flex;
  display: flex;
  flex-direction: column;
  flex: 1;
`
export const FlexProductCard = styled(Card)`
  width: 187px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  background: white;
`
export const FlexProductCart = styled(Card)`
  width: 90%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  background: white;
  margin-top: 10px;
  padding: 10px;
  @media (max-width: 600px) {
    width: 100%;
  }
`
export const FlexCartInfo = styled.div`
  width: 30%;
  height: 100%;
  border: 1px solid #dde5e9;
  border-radius: 4px;
  background: white;
  margin-top: 10px;
  padding: 10px;
  margin-left: 20px;
  @media (max-width: 600px) {
    width: 95%;
    margin: 20px 0 0 0;
  }
`
export const FlexRow = styled(Flex)`
  flex-direction: row;
  align-items: center;
`

export const FlexRowSpaceBetween = styled(FlexRow)`
  justify-content: space-between;
`
export const FlexResponsiveDirection = styled(Flex)`
  flex-direction: row;
  @media (max-width: 600px) {
    flex-direction: column;
  }
  box-sizing: border-box;
`
export const FlexEnd = styled(FlexRow)`
  justify-content: end;
`
export const FlexClickable = styled(Flex)`
  cursor: pointer;
`
