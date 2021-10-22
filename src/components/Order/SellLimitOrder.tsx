import React, { useState } from 'react'
import { TxActionCard, TxSummaryCard } from '@components/Card'
import { OrderInput, OrderInputHeader } from '.'
import { Dropdown } from '@components/Dropdown'
import { CollateralSlider } from '@components/Slider'
import { InputInfoWrap } from '@components/InfoWrap'
import { Input, InputGroup, InputElement, InputPlusMinus, InputMax } from '@components/Input'

import { StepDataType } from '../../types'
import { opt } from '@data/index'

interface SellLimitOrderProps {
  currentStep: number
  steps: StepDataType
}

export const SellLimitOrder: React.FC<SellLimitOrderProps> = ({ steps, currentStep = 1 }) => {
  const [bar, setBar] = useState(20)
  const [spotChange, setSpotChange] = useState(25)
  return (
    <>
      <OrderInput>
        <InputInfoWrap>POSITION SIZE</InputInfoWrap>
        <InputMax />
      </OrderInput>

      <OrderInput>
        <InputInfoWrap>LIMIT PRICE</InputInfoWrap>
        <InputGroup>
          <Input defaultValue="25" pr="55px" />
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
      <OrderInput>
        <InputInfoWrap>COLLATERALIZATION RATIO</InputInfoWrap>
        <InputGroup>
          <Input defaultValue="25" pr="40px" />
          <InputElement width="40px" direction="right">
            %
          </InputElement>
        </InputGroup>
      </OrderInput>
      <OrderInput>
        <InputInfoWrap>SPOT CHANGE</InputInfoWrap>
        <InputPlusMinus value={spotChange} onChange={setSpotChange} />
      </OrderInput>
      <OrderInput>
        <CollateralSlider min={0} max={200} value={bar} onChange={setBar} />
      </OrderInput>
      <OrderInput>
        <OrderInputHeader>LIQUIDATION PRICE</OrderInputHeader>
        <Input defaultValue="~$146.79" disabled />
      </OrderInput>
      <OrderInput>
        <OrderInputHeader>COLLATERAL</OrderInputHeader>
        <Input defaultValue="~$100.00" disabled />
      </OrderInput>
      <TxActionCard steps={steps} totalSteps={steps.length} currentStep={currentStep} />
      <TxSummaryCard />
    </>
  )
}
