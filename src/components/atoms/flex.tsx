import styled from '@emotion/styled'
import { Card } from '@mui/material'

interface FlexFullProps {
  margin?: string
}

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
  padding: 10px;
  margin-bottom: 20px;
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
  padding: 10px;
  @media (max-width: 600px) {
    width: 95%;
    margin: 20px 0 0 0;
  }
`
export const FlexEmptyCart = styled(FlexCartInfo)`
  width: 90%;
  text-align: center;
  padding: 30px 0;
  @media (max-width: 600px) {
    width: 100%;
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
export const FlexFull = styled(Flex)<FlexFullProps>`
  width: 93%;
  margin: ${(props) => (props.margin ? props.margin : '0')};
`
export const FlexProductDetail = styled(FlexRowSpaceBetween)`
  align-items: start;
`
export const FlexProductDescription = styled(Flex)`
  max-width: 50%;
`
export const FlexForm = styled(Flex)`
  background: white;
  max-width: 300px;
  height: 100%;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  margin: 100px 0;
`
