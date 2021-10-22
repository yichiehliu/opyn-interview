import React, { useCallback } from 'react'
import styled from 'styled-components'
import { SliderLabel } from './SliderLabel'

interface SliderProps {
  value: number
  onChange: (value: number) => void
  min: number
  max: number
  thumbHeight?: number
  thumbWidth?: number
  reminderValue?: number
  barHeight?: number
  className?: string
}

export const Slider: React.FC<SliderProps> = ({
  className,
  value,
  onChange,
  barHeight = 4,
  thumbHeight = 14,
  thumbWidth = 3,
  reminderValue = 75,
  min = 0,
  max = 200,
}) => {
  const changeCallback = useCallback(
    e => {
      onChange(parseInt(e.target.value))
    },
    [onChange],
  )

  // const valuePercentage = (value / (max - min)) * 100
  return (
    <>
      <Root>
        <ReminderLabel
          thumbHeight={thumbHeight}
          thumbWidth={thumbWidth}
          reminderValue={reminderValue || 0}
        />
        <div>
          <RangeInput
            type="range"
            className={className}
            thumbHeight={thumbHeight}
            thumbWidth={thumbWidth}
            reminderValue={reminderValue || 0}
            barHeight={barHeight}
            value={value}
            onChange={changeCallback}
            aria-labelledby="input slider"
            min={min}
            max={max}
          />
        </div>
      </Root>
    </>
  )
}

const Root = styled.div`
  position: relative;

  & > :last-child {
    width: 100%;
    height: 20px;
  }
`

const ReminderLabel = styled.span<{
  thumbWidth: number
  thumbHeight: number
  reminderValue: number
}>`
  position: absolute;
  top: 52%;
  left: calc(
    calc(${({ reminderValue }) => reminderValue}% - ${({ thumbWidth }) => thumbWidth}px / 2) - 1px
  );

  height: ${({ thumbHeight }) => thumbHeight}px;
  width: ${({ thumbWidth }) => thumbWidth}px;
  border: none;
  transform: translateY(-50%);

  background-color: var(--green);
  border-radius: 4px;
  outline: 1px solid #ffffff;

  @supports (-moz-appearance: none) {
    /* display: none; */
    // the z-index works different in firefox, the label has to be under the input range field, if the label put above the input then the thumb will be hided
    z-index: 10;
    top: 60%;
  }
`

const RangeInput = styled.input<{
  thumbWidth: number
  thumbHeight: number
  reminderValue: number
  barHeight: number
}>`
  -webkit-appearance: none;
  width: 100%;
  cursor: pointer;
  height: 4px;
  border-radius: 16px;

  background: linear-gradient(
    to right,
    var(--green) 0%,
    var(--green) calc(${({ reminderValue }) => reminderValue}% + 1px),
    var(--grey) ${({ reminderValue }) => reminderValue}%,
    var(--grey) 100%
  );

  @supports (-moz-appearance: none) {
    position: absolute;
    top: 50%;
    z-index: 20;
  }

  &:focus {
    outline: none;
  }

  &::-moz-focus-outer {
    border: 0;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: ${({ thumbHeight }) => thumbHeight}px;
    width: ${({ thumbWidth }) => thumbWidth}px;
    background-color: var(--dark-grey);
    border-radius: 4px;

    outline: 1px solid #ffffff;
    border: none;
    transform: translateY(-50%);

    &:hover,
    &:focus {
      box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.8),
        0px 16px 24px rgba(0, 0, 0, 0.06), 0px 24px 32px rgba(0, 0, 0, 0.4);
    }
  }

  &::-moz-range-thumb {
    height: ${({ thumbHeight }) => thumbHeight}px;
    width: ${({ thumbWidth }) => thumbWidth}px;
    background-color: var(--dark-grey);
    border-radius: 4px;
    border: none;
    outline: 1px solid #ffffff;

    &:hover,
    &:focus {
      box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.8),
        0px 16px 24px rgba(0, 0, 0, 0.06), 0px 24px 32px rgba(0, 0, 0, 0.4);
    }
    z-index: 30;
  }

  &::-ms-thumb {
    height: ${({ thumbHeight }) => thumbHeight}px;
    width: ${({ thumbWidth }) => thumbWidth}px;
    background-color: var(--dark-grey);
    border-radius: 4px;
    outline: 1px solid #ffffff;

    &:hover,
    &:focus {
      box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.8),
        0px 16px 24px rgba(0, 0, 0, 0.06), 0px 24px 32px rgba(0, 0, 0, 0.4);
    }
  }

  &::-webkit-slider-runnable-track {
    border-radius: 16px;
    /* background: var(--grey); */
    height: ${({ barHeight }) => barHeight}px;
  }

  &::-moz-range-track {
    border-radius: 16px;
    /* background: var(--grey); */

    height: ${({ barHeight }) => barHeight}px;
  }

  &::-ms-track {
    border-radius: 16px;
    width: 100%;
    border-color: transparent;
    color: transparent;

    /* background: var(--grey); */
    height: ${({ barHeight }) => barHeight}px;
  }
  &::-ms-fill-lower {
    background: var(--grey);
  }
  &::-ms-fill-upper {
    background: var(--green);
  }
`
