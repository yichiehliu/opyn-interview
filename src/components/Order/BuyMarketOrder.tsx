import React from 'react'
import { TxActionCard, TxSummaryCard } from '@components/Card'
import { OrderInput } from '.'
import { InputInfoWrap } from '@components/InfoWrap'
import { InputMax } from '@components/Input'

import { StepDataType } from '../../types'

interface BuyMarketOrderProps {
  currentStep: number
  steps: StepDataType
}

export const BuyMarketOrder: React.FC<BuyMarketOrderProps> = ({ steps, currentStep = 1 }) => {
  return (
    <>
      <OrderInput>
        <InputInfoWrap>POSITION SIZE</InputInfoWrap>
        <InputMax />
      </OrderInput>
      <TxActionCard steps={steps} totalSteps={steps.length} currentStep={currentStep} />
      <TxSummaryCard />
    </>
  )
}
