import React from 'react'
import styled from 'styled-components'

type OnButtonClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void

interface IconButtonProps {
  className?: string
  width?: string
  height?: string
  icon: React.ReactElement
  fill?: string
  disabled?: boolean
  onClick?: OnButtonClick
}

export const IconButton: React.FC<IconButtonProps> = ({
  className,
  width = '48px',
  height = '48px',
  disabled,
  icon,
  fill,
  onClick = () => {},
}) => {
  return (
    <Root
      type="button"
      width={width}
      height={height}
      onClick={onClick}
      fill={fill}
      disabled={disabled}
      className={className}
      icon={icon}
    >
      {icon}
    </Root>
  )
}

const Root = styled.button<IconButtonProps>`
  display: inline-flex;
  width: ${props => props.width};
  height: ${props => props.height};
  align-items: center;
  justify-content: center;
  padding: 0;
  border: none;
  border-radius: 4px;
  background-color: transparent;
  appearance: none;
  user-select: none;
  cursor: pointer;
  fill: ${props => props.fill};
  opacity: ${props => (props.disabled ? '0.5' : '1')};

  &:focus {
    outline: none;
  }
`
