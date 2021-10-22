import React from 'react'
import { Tabs, TabContent } from '@components/Tabs'
import { SellMarketOrder, SellLimitOrder, BuyLimitOrder, BuyMarketOrder } from '@components/Order'

import {
  sellMarketStepData,
  sellLimitStepData,
  buyMarketStepData,
  buyLimitStepData,
} from '@data/index'
import { OrderDataType, OrderType, PricerType } from '../../types'

interface MarketLimitTabsProps {
  order: OrderDataType
  setOrder: (order) => void
}

export const MarketLimitTabs: React.FC<MarketLimitTabsProps> = ({ order, setOrder }) => {
  return (
    <Tabs initialSelectedTab={order.priceType === PricerType.MARKET ? 0 : 1}>
      <TabContent
        title="Market"
        onClick={() =>
          setOrder(prevOrder => {
            return { ...prevOrder, priceType: PricerType.MARKET }
          })
        }
      >
        {order.orderType === OrderType.SELL ? (
          <SellMarketOrder currentStep={order.currentStep} steps={sellMarketStepData} />
        ) : (
          <BuyMarketOrder currentStep={order.currentStep} steps={buyMarketStepData} />
        )}
      </TabContent>
      <TabContent
        title="Limit"
        onClick={() => {
          setOrder(prevOrder => {
            return { ...prevOrder, priceType: PricerType.LIMIT }
          })
        }}
      >
        {order.orderType === OrderType.SELL ? (
          <SellLimitOrder currentStep={order.currentStep} steps={sellLimitStepData} />
        ) : (
          <BuyLimitOrder currentStep={order.currentStep} steps={buyLimitStepData} />
        )}
      </TabContent>
    </Tabs>
  )
}
