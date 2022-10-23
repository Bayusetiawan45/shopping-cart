import styled from '@emotion/styled'

export interface IImageProps {
  width?: number | string
  height: number | string
  mwidth?: number
  mheight?: number
  margin?: boolean
  bradius?: string
}

export const CustomImage = styled.img<IImageProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  max-width: ${(props) => props.mwidth}px;
  max-height: ${(props) => props.mheight}px;
  margin: ${(props) => (props.margin ? '0px 5px' : null)};
  border-radius: ${(props) => props.bradius};
  object-fit: cover;
  @media (max-width: 600px) {
    border-radius: 10px;
  }
`
