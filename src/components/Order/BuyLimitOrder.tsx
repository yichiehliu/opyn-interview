import React from 'react'
import { TxActionCard, TxSummaryCard } from '@components/Card'
import { OrderInput, OrderInputHeader } from '.'
import { Dropdown } from '@components/Dropdown'
import { InputInfoWrap } from '@components/InfoWrap'
import { Input, InputGroup, InputElement, InputMax } from '@components/Input'

import { StepDataType } from '../../types'
import { opt } from '@data/index'

interface BuyLimitOrderProps {
  currentStep: number
  steps: StepDataType
}

export const BuyLimitOrder: React.FC<BuyLimitOrderProps> = ({ steps, currentStep = 1 }) => {
  return (
    <>
      <OrderInput>
        <InputInfoWrap>POSITION SIZE</InputInfoWrap>
        <InputMax />
      </OrderInput>
      <OrderInput>
        <InputInfoWrap>LIMIT PRICE</InputInfoWrap>
        <InputGroup>
          <Input defaultValue="100" pr="55px" />
          <InputElement width="55px" direction="right">
            USDC
          </InputElement>
        </InputGroup>
      </OrderInput>
      <OrderInput>
        <OrderInputHeader>DEADLINE</OrderInputHeader>
        <InputGroup>
          <Input defaultValue="300" pr="86px" />
          <InputElement width="86px" direction="right">
            <Dropdown options={opt} />
          </InputElement>
        </InputGroup>
      </OrderInput>

      <TxActionCard steps={steps} totalSteps={steps.length} currentStep={currentStep} />
      <TxSummaryCard />
    </>
  )
}
