import React from 'react'
import styled from 'styled-components'
import DropdownSvg from '@images/dropdown.svg'

interface DropdownProps {
  options: { value: string; label: string }[]
  defaultValue?: string
  placeholder?: string
  className?: string
  onChange?: (option: any) => void
}

export const Dropdown: React.FC<DropdownProps> = ({
  options,
  onChange,
  className,
  defaultValue,
  placeholder,
}) => {
  return (
    <Root>
      <StyledSelect
        className={className}
        defaultValue={defaultValue}
        placeholder={placeholder}
        onChange={onChange}
      >
        {options.map(({ value, label }, index) => (
          <option key={value + index} value={value} label={label}>
            {label}
          </option>
        ))}
      </StyledSelect>
    </Root>
  )
}

const Root = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`

const StyledSelect = styled.select`
  -moz-appearance: none; /* Firefox */
  -webkit-appearance: none; /* Safari and Chrome */
  appearance: none;

  padding: 0 30px 0 10px;

  background-image: url(${DropdownSvg});
  background-position: right 10px center;
  background-repeat: no-repeat;
  background-size: auto 50%;
  background-color: transparent;
  border-radius: 2px;
  border: none;
  outline: none;
  color: var(--blue);

  &::-ms-expand {
    display: none;
  }
`
