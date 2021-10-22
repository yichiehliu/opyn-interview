import React from 'react'
import styled from 'styled-components'

interface SideBarProps {
  className?: string
}

export const SideBar: React.FC<SideBarProps> = ({ className, children }) => {
  return <Root className={className}>{children}</Root>
}

const Root = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 280px;
  height: 100%;
`
