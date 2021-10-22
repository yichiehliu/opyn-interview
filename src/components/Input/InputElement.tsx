import React from 'react'
import styled from 'styled-components'

interface InputElementProps {
  width: string
  pointerEvents?: string
  fill?: string
  direction: 'left' | 'right'
  top?: string
  className?: string
}

export const InputElement: React.FC<InputElementProps> = ({
  width,
  pointerEvents,
  fill,
  direction,
  top,
  className,
  children,
}) => {
  return (
    <Root
      width={width}
      pointerEvents={pointerEvents}
      fill={fill}
      direction={direction}
      top={top}
      className={className}
    >
      {children}
    </Root>
  )
}

const Root = styled.div<InputElementProps>`
  position: absolute;
  top: ${props => props.top && props.top};
  ${props => (props.direction === 'right' ? 'right: 0' : 'left: 0')};

  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.width};
  height: 100%;
  pointer-events: ${props => props.pointerEvents};
  fill: ${props => props.fill};

  font-size: 0.75rem;
`
