import React from 'react'
import { ApproveButton } from '@components/Button'

import {
  sellMarketStepData,
  sellLimitStepData,
  buyMarketStepData,
  buyLimitStepData,
} from '@data/index'
import { OrderDataType } from '../../types'

interface OrderActionProps {
  loading: boolean
  setLoading: (loading: boolean) => void
  order: OrderDataType
  setOrder: (order) => void
}

export const OrderAction: React.FC<OrderActionProps> = ({
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

  // if want to test other three types of tx flow just remove the disabled and change the onlick the isloading as Market Sell Button
  if (order.orderType === 'sell' && order.priceType === 'limit') {
    if (order.currentStep === sellLimitStepData.length) next = 1
    return <ApproveButton disabled>{sellLimitStepData[curernStepIndex].buttonDesc}</ApproveButton>
  } else if (order.orderType === 'sell' && order.priceType === 'market') {
    if (order.currentStep === sellMarketStepData.length) next = 1
    return (
      <ApproveButton
        isLoading={loading}
        onClick={async () => {
          await fakeLoading()
          setOrder(prevOrder => {
            return { ...prevOrder, currentStep: next }
          })
        }}
      >
        {sellMarketStepData[curernStepIndex].buttonDesc}
      </ApproveButton>
    )
  } else if (order.orderType === 'buy' && order.priceType === 'market') {
    if (order.currentStep === buyMarketStepData.length) next = 1
    return <ApproveButton disabled>{buyMarketStepData[curernStepIndex].buttonDesc}</ApproveButton>
  } else {
    if (order.currentStep === buyLimitStepData.length) next = 1
    return <ApproveButton disabled>{buyLimitStepData[curernStepIndex].buttonDesc}</ApproveButton>
  }
}
