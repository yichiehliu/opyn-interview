import React from 'react'
import styled from 'styled-components'

export const Page: React.FC = ({ children }) => {
  return <Root>{children}</Root>
}

const Root = styled.div`
  padding: 76px 280px;
  color: var(--text-dark);
  background-color: var(--background);
`

export const PageTitle = styled.h1`
  margin: 8px 0 10px;
  font-weight: bold;
  font-size: 32px;
  color: var(--text-dark);
`

export const PageContent = styled.div`
  margin-top: 30px;
`
