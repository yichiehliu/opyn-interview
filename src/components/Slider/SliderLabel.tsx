import React from 'react'
import styled from 'styled-components'

interface SliderLabelProps {
  totalSteps?: number
}

export const SliderLabel: React.FC<SliderLabelProps> = ({ totalSteps = 5 }) => {
  return (
    <Root>
      {Array.from({ length: totalSteps }, (v, index) => {
        if (index === 0) return <span key={'bar' + index}>0%</span>
        const perc = index / (totalSteps - 1)
        return (
          <span style={{ marginRight: -(perc * 10) }} key={'bar' + index}>
            {perc * 100}%
          </span>
        )
      })}
    </Root>
  )
}

const Root = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;

  font-size: 0.75rem;
  font-weight: 300;

  color: #77757e;
  opacity: 0.7;
`
