import React from 'react'
import styled from 'styled-components'
import {
  SellButton,
  BuyButton,
  ConnectButton,
  ApproveButton,
  OrderLinkButton,
  Button,
} from '@components/Button'
import { ReactComponent as ArrowSvg } from '@images/mutual-arrow.svg'
import { ReactComponent as InfoSvg } from '@images/info.svg'
import { OrderDataType } from '../../types'

interface OptionInfoCardProps {
  order: OrderDataType
  setOrder: (order) => void
}

export const OptionInfoCard: React.FC<OptionInfoCardProps> = ({ order, setOrder }) => {
  return (
    <>
      <OptionType>
        <BuyButton
          active={order?.orderType === 'buy'}
          onClick={() =>
            setOrder(prevOrder => {
              return { ...prevOrder, orderType: 'buy' }
            })
          }
        >
          BUY
        </BuyButton>
        <SellButton
          active={order?.orderType === 'sell'}
          onClick={() =>
            setOrder(prevOrder => {
              return { ...prevOrder, orderType: 'sell' }
            })
          }
        >
          SELL
        </SellButton>
      </OptionType>
      <OptionInfo style={{ alignItems: 'baseline' }}>
        <OrderToken>WETH</OrderToken>
        <div style={{ color: 'var(--text-subtle)' }}>FRI, 30 APR 2021</div>
      </OptionInfo>
      <OptionInfo>
        <ArrowSvg />
        <div>PUT -- $2080 STRIKE</div>
      </OptionInfo>
      <OptionInfo>
        <InfoSvg />
        <div>
          To create a spread, select another option.&nbsp;
          <OuterLink
            href="https://opyn.gitbook.io/opyn//#what-is-a-spread"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn more
          </OuterLink>
        </div>
      </OptionInfo>
    </>
  )
}

const OrderToken = styled.span`
  font-weight: 800;
  font-size: 1.3rem;
`

const OptionInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 11px;

  font-size: 0.75rem;

  & > svg {
    min-width: 16px;
  }
`

const OuterLink = styled.a`
  font-weight: 800;
  text-decoration: underline;

  &:visited {
    color: var(--text-dark);
  }
`

const OptionType = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
`
