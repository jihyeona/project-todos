import styled from 'styled-components'

export const TitleEmoji = styled.span.attrs(({ ariaLabel }) => ({
  role: 'img',
  'aria-label': ariaLabel
}))`
  font-size:40px;
`