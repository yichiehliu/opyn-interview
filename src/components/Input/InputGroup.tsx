import React from 'react'
import styled from 'styled-components'

interface InputGroupProps {
  className?: string
}

export const InputGroup: React.FC<InputGroupProps> = ({ className, children }) => {
  return <Root className={className}>{children}</Root>
}

const Root = styled.div`
  position: relative;
  display: flex;
`
