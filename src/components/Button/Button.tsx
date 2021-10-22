import React from 'react'
import styled from 'styled-components'

import { ReactComponent as LoadingSvg } from '@images/loading.svg'

interface ButtonProps {
  style?: React.CSSProperties
  type?: 'button' | 'submit' | 'reset'
  className?: string
  rightIcon?: React.ReactElement
  leftIcon?: React.ReactElement
  spacing?: string
  isLoading?: boolean
  disabled?: boolean
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export const Button: React.FC<ButtonProps> = ({
  style,
  type,
  className,
  rightIcon,
  leftIcon,
  spacing,
  isLoading = false,
  disabled = false,
  onClick,
  children,
}) => {
  return (
    <Root
      style={style}
      type={type}
      className={className}
      rightIcon={rightIcon}
      leftIcon={leftIcon}
      spacing={spacing}
      isLoading={isLoading}
      disabled={disabled}
      onClick={onClick && onClick}
    >
      {leftIcon && leftIcon}
      <Text isLoading={isLoading}>{children}</Text>
      {rightIcon && rightIcon}
      <LoadingWrap isLoading={isLoading}>
        <LoadingSvg />
      </LoadingWrap>
    </Root>
  )
}

const Root = styled.button<ButtonProps>`
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: auto;
  white-space: nowrap;
  border-radius: 4px;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  pointer-events: ${props => (props.disabled || props.isLoading ? 'none' : 'auto')};
  color: ${props => (props.disabled ? 'var(--text-subtle)' : 'var(--text-dark)')};
  opacity: ${props => (props.isLoading ? 0.5 : 1)};

  & > *:not(:first-child) {
    margin-left: ${props => props.spacing};
  }

  &:focus {
    outline: none;
  }
`

const Text = styled.span<{ isLoading: boolean }>`
  visibility: ${props => props.isLoading && 'hidden'};
  transition: opacity 0.3s ease-in;
`

const LoadingWrap = styled.div<{ isLoading: boolean }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 24px;
  height: 24px;
  pointer-events: none;
  display: ${props => (props.isLoading ? 'block' : 'none')};
  opacity: ${props => (props.isLoading ? 1 : 0)};

  & > svg {
    width: 100%;
    height: 100%;
    animation: rotate 0.9s linear infinite;

    @keyframes rotate {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }
`

export const BuyButton = styled(Button)<{ active: boolean }>`
  flex-grow: 1;
  padding: 7px 28px;
  box-sizing: border-box;
  border: 1px solid var(--green);
  font-weight: bold;

  background-color: var(--white);
  color: var(--green);

  ${({ active }) => active && 'background-color: var(--green);color: var(--white)'};

  &:hover {
    background-color: var(--light-green);
  }

  &:active,
  &:focus {
    background-color: var(--green);
    color: var(--white);
  }

  &:active {
    transition-duration: 0.2s;
    transform: translateY(2px);
  }
`

export const SellButton = styled(BuyButton)`
  border: 1px solid var(--red);

  color: var(--red);

  ${({ active }) => active && 'background-color: var(--red);color: var(--white)'};

  &:hover {
    background-color: var(--light-red);
  }
  &:active,
  &:focus {
    background-color: var(--red);
  }
`
export const ConnectButton = styled(Button)`
  padding: 12px 24px;
  width: 100%;
  outline: 0;
  border: 0;
  background-color: #cd6116;
  color: var(--white);
  font-weight: 500;
  box-shadow: 0px -4px 10px rgba(222, 222, 222, 0.5);
  transition: all 0.6s ease-in-out;
  &:hover {
    opacity: 0.8;
    box-shadow: rgb(0 0 0 / 20%) 0px 5px 5px -3px, rgb(0 0 0 / 14%) 0px 8px 10px 1px,
      rgb(0 0 0 / 12%) 0px 3px 14px 2px;
  }
  &:active {
    transition-duration: 0.2s;
    transform: translateY(2px);
  }
`

export const ApproveButton = styled(ConnectButton)`
  background-color: ${props => (props.disabled ? 'var(--grey)' : ' var(--green)')};

  &:hover {
    background-color: var(--green);
  }
`

export const OrderLinkButton = styled.a`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border-radius: 4px;

  padding: 12px 24px;
  width: 100%;
  outline: 0;
  border: 0;
  background-color: #cd6116;
  color: var(--white);
  text-decoration: none;
  font-weight: bold;

  cursor: pointer;

  &:hover {
    background-color: #df894d;
    box-shadow: rgb(0 0 0 / 20%) 0px 5px 5px -3px, rgb(0 0 0 / 14%) 0px 8px 10px 1px,
      rgb(0 0 0 / 12%) 0px 3px 14px 2px;
  }
  &:active {
    transition-duration: 0.2s;
    transform: translateY(2px);
  }
  &:focus {
    outline: none;
  }
`

export const MaxButton = styled(Button)`
  display: flex;
  padding-top: 3px;

  width: 38px;
  height: 19px;
  font-weight: bold;
  border: 1px solid var(--blue);
  background-color: var(--white);
  color: var(--blue);

  font-size: 0.75rem;

  &:hover {
    color: var(--white);
    background-color: var(--blue);
  }
  &:active {
    transition-duration: 0.2s;
    transform: translateY(2px);
  }
`
