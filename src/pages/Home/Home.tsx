import React, { useEffect, useState } from 'react'

import { SwitchButton } from '@components/Button'
import { Page, PageContent } from '@components/Page'
import { OrderSideBar } from './OrderSideBar'

import { Account, Balance, ErrorMsg } from '@libs/connectWallet'
import { OrderDataType, OrderType, PricerType } from '../../types'

const initialState: OrderDataType = {
  orderType: OrderType.SELL,
  priceType: PricerType.MARKET,
  currentStep: 1,
}

export const Home: React.FC = () => {
  const [order, setOrder] = useState<OrderDataType>(initialState)
  const [loading, setLoading] = useState(false)
  const [disabled, setDisabled] = useState(true)

  useEffect(() => {
    setOrder(prevState => {
      return { ...prevState, currentStep: 1 }
    })
  }, [order.orderType, order.priceType, setOrder])

  return (
    <>
      <Page>
        <PageContent>
          <h1>Metamask Connection</h1>
          <div>
            Wallet Address: <Account />
          </div>
          <br />
          <div>
            Account Balance: <Balance />
          </div>
          <br />
          <div>
            Error Message: <ErrorMsg />
          </div>
          <br />
          <div>
            <h2>To see other three order flows: buy-market, buy-limit, sell-limit</h2>
            <SwitchButton isDisabled={disabled} onClick={() => setDisabled(!disabled)}>
              Enable / Disable
            </SwitchButton>
          </div>
        </PageContent>
      </Page>
      <OrderSideBar
        disabled={disabled}
        order={order}
        setOrder={setOrder}
        loading={loading}
        setLoading={setLoading}
      />
    </>
  )
}

export default Home
