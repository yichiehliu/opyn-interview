import React from 'react'
import { Tabs, TabContent } from '@components/Tabs'
import { SellMarketOrder, SellLimitOrder, BuyLimitOrder, BuyMarketOrder } from '@components/Order'

import {
  sellMarketStepData,
  sellLimitStepData,
  buyMarketStepData,
  buyLimitStepData,
} from '@data/index'
import { OrderDataType } from '../../types'

interface MarketLimitTabsProps {
  order: OrderDataType
  setOrder: (order) => void
}

export const MarketLimitTabs: React.FC<MarketLimitTabsProps> = ({ order, setOrder }) => {
  return (
    <Tabs initialSelectedTab={order.priceType === 'market' ? 0 : 1}>
      <TabContent
        title="Market"
        onClick={() =>
          setOrder(prevOrder => {
            return { ...prevOrder, priceType: 'market' }
          })
        }
      >
        {order.orderType === 'sell' ? (
          <SellMarketOrder currentStep={order.currentStep} steps={sellMarketStepData} />
        ) : (
          <BuyMarketOrder currentStep={order.currentStep} steps={buyMarketStepData} />
        )}
      </TabContent>
      <TabContent
        title="Limit"
        onClick={() => {
          setOrder(prevOrder => {
            return { ...prevOrder, priceType: 'limit' }
          })
        }}
      >
        {order.orderType === 'sell' ? (
          <SellLimitOrder currentStep={order.currentStep} steps={sellLimitStepData} />
        ) : (
          <BuyLimitOrder currentStep={order.currentStep} steps={buyLimitStepData} />
        )}
      </TabContent>
    </Tabs>
  )
}
