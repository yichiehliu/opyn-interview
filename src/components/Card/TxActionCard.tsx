import React from 'react'
import styled from 'styled-components'
import { Header } from '.'

import { ReactComponent as InfoSvg } from '@images/info.svg'
import { ReactComponent as ToggleSvg } from '@images/toggle-small.svg'
import { ReactComponent as CheckSvg } from '@images/check-circle.svg'

import { StepDataType, StepIconType } from '../../types'

interface TxActionCardProps {
  currentStep: number
  totalSteps: number
  steps: StepDataType
}

export const TxActionCard: React.FC<TxActionCardProps> = ({
  currentStep = 1,
  totalSteps = 4,
  steps,
}) => {
  return (
    <TxActions>
      <Header>TX ACTION</Header>
      {Array.from({ length: totalSteps }, (v, index) => {
        return (
          <TxActionItem key={'item' + index} currentStep={currentStep} currentIndex={index + 1}>
            {steps[index].icon === StepIconType.CHECK && <CheckSvg />}
            {steps[index].icon === StepIconType.TOGGLE && <ToggleSvg />}
            <span>{index + 1 + '. ' + steps[index].desc}</span>
            <InfoSvg />
          </TxActionItem>
        )
      })}
    </TxActions>
  )
}

const TxActions = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
`

const TxActionItem = styled.div<{ currentStep: number; currentIndex: number }>`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 8px 0;

  font-size: 0.75rem;
  ${({ currentStep, currentIndex }) =>
    currentStep === currentIndex
      ? 'opacity: 1; text-decoration: underline; font-weight: 500'
      : 'opacity: 0.6'};

  & > :last-child {
    margin-left: auto;
    margin-bottom: 0;
    cursor: pointer;
  }

  & > svg {
    min-width: 20px;
  }
`
