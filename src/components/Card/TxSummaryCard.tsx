import React from 'react'
import styled from 'styled-components'
import { Header } from '.'
import { InfoWrap } from '@components/InfoWrap'

export const TxSummaryCard: React.FC = () => {
  return (
    <TxSummary>
      <Header>Tx Summary</Header>
      <TxSummaryItem style={{ marginBottom: '8px', opacity: '1' }}>
        <InfoWrap style={{ fontWeight: 500 }}>Premium/oToken</InfoWrap>
        <span>USDC</span>
      </TxSummaryItem>
      <Divider />
      <TxSummaryItem>
        <InfoWrap>Est. Total Cost</InfoWrap>
        <span>103.937 USDC</span>
      </TxSummaryItem>
      <TxSummaryItem>
        <InfoWrap>Market Impact</InfoWrap>
        <span>0.02%</span>
      </TxSummaryItem>
      <TxSummaryItem>
        <InfoWrap>0x Protocol Fee</InfoWrap>
        <span>
          0.0983 <span style={{ textDecoration: 'underline' }}>ETH</span>
        </span>
      </TxSummaryItem>
      <TxSummaryItem>
        <InfoWrap>Collateral</InfoWrap>
        <span>0.00234 USDC</span>
      </TxSummaryItem>
      <TxSummaryItem>
        <InfoWrap>Net Total Cost</InfoWrap>
        <div>
          <span style={{ fontSize: '16px' }}>113.532</span>
          <span style={{ color: 'var(--dark-grey)', fontWeight: 'normal' }}>+0.0983 ETH</span>
        </div>
      </TxSummaryItem>
    </TxSummary>
  )
}

const TxSummary = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  background-color: var(--light-grey);
  padding: 14px 8px;
  font-size: 0.75rem;
  border-radius: 4px;

  & > :last-child {
    margin: 14px -8px -14px;
    padding: 14px 8px;
    background-color: var(--grey);
    opacity: 1;
    font-weight: 500;
    border-radius: 0 0 4px 4px;
  }
`

const TxSummaryItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 22px;
  gap: 4px;
  opacity: 0.6;
`

const Divider = styled.div`
  width: 100%;
  border: 1px solid #dcdae9;
`
