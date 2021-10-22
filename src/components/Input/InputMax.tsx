import React, { useState } from 'react'
import styled from 'styled-components'
import { MaxButton } from '@components/Button'
import { Input, InputGroup, InputElement } from '@components/Input'

interface InputMaxProps {
  topTitle?: string
  maxTitle?: string
  maxValue?: number
}

export const InputMax: React.FC<InputMaxProps> = ({
  topTitle = 'oToken Balance',
  maxTitle = 'oTokens',
  maxValue = 50,
}) => {
  const [value, setValue] = useState(0)
  return (
    <InputGroup>
      <InputMaxTopElement>
        <span>{topTitle}:</span>
        <span>21.042</span>
      </InputMaxTopElement>

      <StyledInputMax value={value} onChange={e => setValue((e.target as any).value)} pr="100px" />
      <InputMaxRightElement width="100px" direction="right">
        <MaxButton onClick={() => setValue(maxValue)}>MAX</MaxButton>
        <span>{maxTitle}</span>
      </InputMaxRightElement>
    </InputGroup>
  )
}

const InputMaxRightElement = styled(InputElement)`
  align-items: flex-end;
  gap: 4px;
  & > * {
    margin-bottom: 10px;
  }
`

const InputMaxTopElement = styled.div`
  position: absolute;

  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  padding: 3px;
  margin: 9px 7px 0;

  border-radius: 2px;
  background-color: var(--grey);
  opacity: 0.5;
  font-size: 0.75rem;

  & > :last-child {
    font-weight: 800;
    color: var(--dark-grey);
  }
`

const StyledInputMax = styled(Input)`
  height: 70px;
  padding-top: 30px;
`
