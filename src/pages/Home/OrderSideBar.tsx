import React from 'react'
import styled from 'styled-components'
import { Card } from '@components/Card'
import { SideBar } from '@components/SideBar'
import { Wallet } from '@components/Wallet'
import { MarketLimitTabs } from './MarketLimitTabs'
import { OptionInfoCard } from './OptionInfoCard'
import { OrderAction } from './OrderAction'
import { ReactComponent as InfoSvg } from '@images/info.svg'

import { OrderDataType } from '../../types'

interface OrderSideBarProps {
  loading: boolean
  setLoading: (loading: boolean) => void
  order: OrderDataType
  setOrder: (order) => void
}

export const OrderSideBar: React.FC<OrderSideBarProps> = ({
  order,
  setOrder,
  loading,
  setLoading,
}) => {
  return (
    <SideBar>
      <OrderCard>
        <OrderCardTitle>
          <span>Order Card</span>
          <InfoSvg />
        </OrderCardTitle>
        <Card>
          <OptionInfoCard order={order} setOrder={setOrder} />
        </Card>
        <Card style={{ padding: '0' }}>
          <MarketLimitTabs order={order} setOrder={setOrder} />
        </Card>
      </OrderCard>
      <OrderActionCard>
        <Wallet setOrder={setOrder} loading={loading} setLoading={setLoading}>
          <OrderAction
            order={order}
            setOrder={setOrder}
            loading={loading}
            setLoading={setLoading}
          />
        </Wallet>
      </OrderActionCard>
    </SideBar>
  )
}

export const OrderCard = styled.div`
  overflow-y: scroll;
  box-sizing: border-box;

  height: 100%;
  padding: 16px 16px 74px;

  background-color: var(--white);
`

const OrderCardTitle = styled.div`
  font-size: 24px;
  & > svg {
    margin-left: 10px;
  }
`

const OrderActionCard = styled(Card)`
  position: absolute;
  bottom: 0;
  right: 0;

  margin: 0;
  box-sizing: border-box;
  width: 100%;
`
