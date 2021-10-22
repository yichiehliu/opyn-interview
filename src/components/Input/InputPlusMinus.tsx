import React, { useCallback } from 'react'
import styled from 'styled-components'
import { Input, InputGroup, InputElement } from '@components/Input'
import { IconButton } from '@components/Button'
import { ReactComponent as PlusSvg } from '@images/plus.svg'
import { ReactComponent as MinusSvg } from '@images/minus.svg'

interface InputPlusMinusProps {
  value: number
  onChange: (value: number) => void
}

export const InputPlusMinus: React.FC<InputPlusMinusProps> = ({ value, onChange }) => {
  const changeCallback = useCallback(
    e => {
      const v = parseInt(e.target.value.toString())
      if (isNaN(v)) return
      onChange(v)
    },
    [onChange],
  )

  const onInputMinus = () => {
    onChange(value - 1)
  }
  const onInputAdd = () => {
    onChange(value + 1)
  }
  return (
    <>
      <InputGroup>
        <InputElement width="64px" direction="left">
          <PlusMinusBox>
            <IconButton onClick={onInputMinus} icon={<MinusSvg />} />
            <IconButton onClick={onInputAdd} icon={<PlusSvg />} />
          </PlusMinusBox>
        </InputElement>
        <Input
          value={value}
          pr="40px"
          pl="64px"
          align="right"
          type="number"
          onChange={changeCallback}
        />
        <InputElement width="40px" direction="right">
          %
        </InputElement>
      </InputGroup>
    </>
  )
}

const PlusMinusBox = styled.div`
  display: flex;
  width: 40px;
  height: 21px;
  border-radius: 32px;
  background-color: #f1f0f6;

  & button {
    width: 100%;
    height: 100%;
  }
`
