import React from 'react'
import { ApproveButton } from '@components/Button'

import {
  sellMarketStepData,
  sellLimitStepData,
  buyMarketStepData,
  buyLimitStepData,
} from '@data/index'
import { OrderDataType, OrderType, PricerType } from '../../types'

interface OrderActionProps {
  disabled: boolean
  loading: boolean
  setLoading: (loading: boolean) => void
  order: OrderDataType
  setOrder: (order) => void
}

export const OrderAction: React.FC<OrderActionProps> = ({
  disabled,
  order,
  setOrder,
  loading,
  setLoading,
}) => {
  let next = order.currentStep + 1
  const curernStepIndex = order.currentStep - 1

  // fake loading function
  const fakeLoading = async () => {
    setLoading(true)
    return new Promise<void>(resolve => {
      setTimeout(() => {
        setLoading(false)
        resolve()
      }, 2000)
    })
  }

  const setNextStep = async () => {
    await fakeLoading()
    setOrder(prevOrder => {
      return { ...prevOrder, currentStep: next }
    })
  }

  if (order.orderType === OrderType.SELL && order.priceType === PricerType.LIMIT) {
    if (order.currentStep === sellLimitStepData.length) next = 1
    return (
      <ApproveButton disabled={disabled} isLoading={loading} onClick={setNextStep}>
        {sellLimitStepData[curernStepIndex].buttonDesc}
      </ApproveButton>
    )
  } else if (order.orderType === OrderType.SELL && order.priceType === PricerType.MARKET) {
    if (order.currentStep === sellMarketStepData.length) next = 1
    return (
      <ApproveButton isLoading={loading} onClick={setNextStep}>
        {sellMarketStepData[curernStepIndex].buttonDesc}
      </ApproveButton>
    )
  } else if (order.orderType === OrderType.BUY && order.priceType === PricerType.MARKET) {
    if (order.currentStep === buyMarketStepData.length) next = 1
    return (
      <ApproveButton disabled={disabled} isLoading={loading} onClick={setNextStep}>
        {buyMarketStepData[curernStepIndex].buttonDesc}
      </ApproveButton>
    )
  } else {
    if (order.currentStep === buyLimitStepData.length) next = 1
    return (
      <ApproveButton disabled={disabled} isLoading={loading} onClick={setNextStep}>
        {buyLimitStepData[curernStepIndex].buttonDesc}
      </ApproveButton>
    )
  }
}
