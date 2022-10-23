import styled from '@emotion/styled'

type CustomTextProps = {
  fsize?: number
  fweight?: number
  ffamily?: string
  margin?: string
  padding?: string
  color?: string
  bcolor?: string
  lheight?: string | number
}

export const H3 = styled.h3`
  font-weight: 500;
`

export const CustomText = styled(H3)<CustomTextProps>`
  font-size: ${(props) => props.fsize}px;
  font-weight: ${(props) => props.fweight};
  font-family: ${(props) => (props.ffamily ? props.ffamily : 'Poppins')};
  line-height: ${(props) => props.lheight};
  margin: ${(props) => (props.margin ? props.margin : '0')};
  color: ${(props) => props.color};
  background-color: ${(props) => props.bcolor};
`
