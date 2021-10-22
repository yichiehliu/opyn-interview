import React from 'react'
import { Slider, SliderLabel } from '@components/Slider'

import { ReactComponent as SafeSvg } from '@images/safe.svg'

interface CollateralSliderProps {
  max: number
  min: number
  value: number
  onChange: (value: number) => void
}

export const CollateralSlider: React.FC<CollateralSliderProps> = ({
  max,
  min,
  value,
  onChange,
}) => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: '0.75rem',
        }}
      >
        <span
          style={{
            display: 'flex',
            alignItems: 'end',
            color: 'var(--green)',
            gap: '4px',
          }}
        >
          <SafeSvg />
          <span>SAFE</span>
        </span>
        <span
          style={{
            color: 'var(--dark-grey)',
          }}
        >
          Collateral %
        </span>
      </div>
      <Slider min={min} max={max} value={value} onChange={onChange} />
      <SliderLabel />
    </>
  )
}
