import React, { useEffect, useState } from 'react'
import { RouteComponentProps } from '@reach/router'

import { Page, PageContent, PageTitle } from '@components/Page'
import { OrderSideBar } from './OrderSideBar'

import { Account, Balance, ErrorMsg } from '@libs/connectWallet'
import { OrderDataType } from '../../types'

const initialState: OrderDataType = {
  orderType: 'sell',
  priceType: 'market',
  currentStep: 1,
}

export const Home: React.FC<RouteComponentProps> = () => {
  const [order, setOrder] = useState<OrderDataType>(initialState)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setOrder(prevState => {
      return { ...prevState, currentStep: 1 }
    })
  }, [order.orderType, order.priceType, setOrder])

  return (
    <>
      <Page>
        <PageTitle>Metamask Connection</PageTitle>
        <PageContent>
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
        </PageContent>
      </Page>
      <OrderSideBar order={order} setOrder={setOrder} loading={loading} setLoading={setLoading} />
    </>
  )
}

export default Home
