import React from 'react'
import styled, { css } from 'styled-components'

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  align?: 'right' | 'left'
  className?: string
  isError?: boolean
  pl?: string
  pr?: string
  accept?: string
  autoComplete?: 'on' | 'off'
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(function input(
  {
    name,
    type,
    defaultValue,
    placeholder,
    disabled,
    align,
    pl,
    pr,
    isError,
    className,
    onChange,
    value,
    accept,
    readOnly,
    autoComplete = 'off',
  },
  ref,
) {
  return (
    <NativeInput
      align={align}
      className={className}
      ref={ref}
      name={name}
      type={type}
      defaultValue={defaultValue}
      placeholder={placeholder}
      disabled={disabled}
      isError={isError}
      pl={pl}
      pr={pr}
      accept={accept}
      onChange={onChange}
      value={value}
      readOnly={readOnly}
      autoComplete={autoComplete}
    />
  )
})

const disabledCss = css`
  background-color: var(--grey);
  color: var(--text-dark);
  opacity: 0.4;
`

const NativeInput = styled.input<InputProps>`
  width: 100%;
  height: 40px;
  padding-top: 0;
  padding-bottom: 0;
  padding-left: ${props => (props.pl ? props.pl : '12px')};
  padding-right: ${props => (props.pr ? props.pr : '12px')};
  border-radius: 4px;
  border: 1px solid ${({ isError }) => (isError ? 'var(--alert)' : 'var(--grey)')};
  box-sizing: border-box;
  background-color: var(--white);
  color: var(--text-body);

  text-align: ${props => props.align};

  &:focus {
    outline: none;
  }

  ${props => props.disabled && disabledCss}
`
