import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { ConnectButton, OrderLinkButton } from '@components/Button'

import { injected } from '../../connectors'
import { useWeb3React } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'
import useEagerConnect from '../../hooks/useEagerConnect'
import useInactiveListener from '../../hooks/useInactiveListener'

interface WalletProps {
  loading: boolean
  setLoading: (loading: boolean) => void
  setOrder: (order) => void
}

export const Wallet: React.FC<WalletProps> = ({ children, loading, setLoading, setOrder }) => {
  const { connector, activate, active, deactivate, error } = useWeb3React<Web3Provider>()

  const [activatingConnector, setActivatingConnector] = useState<any>()
  useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined)
    }
  }, [activatingConnector, connector])

  // handle logic to eagerly connect to the injected ethereum provider, if it exists and has granted access already
  const triedEager = useEagerConnect()

  // handle logic to connect in reaction to certain events on the injected ethereum provider, if it exists
  useInactiveListener(!triedEager || !!activatingConnector)
  const isMetamask = (window as any).ethereum && (window as any).ethereum.isMetaMask
  const currentConnector = injected
  const activating = currentConnector === activatingConnector
  const connected = currentConnector === connector
  const disabled = !triedEager || !!activatingConnector || connected || !!error

  // go back to initial state(first step) once lose metamask connection
  useEffect(() => {
    setOrder(prevState => {
      return { ...prevState, currentStep: 1 }
    })
  }, [active, setOrder])

  // load at least 2000s and then set the connector
  const fakeLoading = async () => {
    setLoading(true)
    return new Promise<void>(resolve => {
      setTimeout(() => {
        setLoading(false)
        resolve()
      }, 2000)
    })
  }

  return (
    <>
      {isMetamask ? (
        active ? (
          children
        ) : error ? (
          <ErrorBox>Wallet Error</ErrorBox>
        ) : (
          <ConnectButton
            disabled={disabled}
            isLoading={activating || loading}
            onClick={async () => {
              await fakeLoading()
              setActivatingConnector(currentConnector)
              activate(currentConnector)
            }}
          >
            CONNECT TO METAMASK
          </ConnectButton>
        )
      ) : (
        <OrderLinkButton href="https://metamask.io/" target="_blank" rel="noreferrer">
          INSTALL METAMASK
        </OrderLinkButton>
      )}
    </>
  )
}

export const ErrorBox = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;

  width: 100%;
  padding: 12px 24px;
  box-sizing: border-box;
  border-radius: 4px;
  font-weight: 500;
  text-transform: uppercase;
  white-space: nowrap;

  background-color: var(--red);
  color: var(--white);
`
