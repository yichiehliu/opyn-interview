import React from 'react'
import { useWeb3React, UnsupportedChainIdError } from '@web3-react/core'
import {
  NoEthereumProviderError,
  UserRejectedRequestError as UserRejectedRequestErrorInjected,
} from '@web3-react/injected-connector'
import { formatEther } from '@ethersproject/units'
import { injected } from '../connectors'

enum ConnectorNames {
  Injected = 'Injected',
}

export const connectorsByName: { [connectorName in ConnectorNames]: any } = {
  [ConnectorNames.Injected]: injected,
}

export const getErrorMessage = (error: Error): string => {
  if (error instanceof NoEthereumProviderError) {
    return 'No Ethereum browser extension detected, install MetaMask on desktop or visit from a dApp browser on mobile.'
  } else if (error instanceof UnsupportedChainIdError) {
    return "You're connected to an unsupported network."
  } else if (error instanceof UserRejectedRequestErrorInjected) {
    return 'Please authorize this website to access your Ethereum account.'
  } else {
    console.error(error)
    return 'An unknown error occurred. Check the console for more details.'
  }
}

export const ErrorMsg = (): JSX.Element => {
  const { error } = useWeb3React()
  return (
    <>
      <span>{error ? getErrorMessage(error) : '-'}</span>
    </>
  )
}

export const Account = (): JSX.Element => {
  const { account } = useWeb3React()
  return (
    <>
      <span>
        {account === null
          ? '-'
          : account
          ? `${account.substring(0, 6)}...${account.substring(account.length - 4)}`
          : '-'}
      </span>
    </>
  )
}

export const Balance = (): JSX.Element => {
  const { account, library, chainId } = useWeb3React()

  const [balance, setBalance] = React.useState()
  React.useEffect((): any => {
    if (!!account && !!library) {
      let stale = false

      library
        .getBalance(account)
        .then((balance: any) => {
          if (!stale) {
            setBalance(balance)
          }
        })
        .catch(() => {
          if (!stale) {
            setBalance(null)
          }
        })

      return () => {
        stale = true
        setBalance(undefined)
      }
    }
  }, [account, library, chainId]) // ensures refresh if referential identity of library doesn't change across chainIds
  return (
    <>
      <span>
        {balance === null
          ? 'Error'
          : balance
          ? `${formatEther(balance).substring(0, formatEther(balance).indexOf('.') + 5)} ETH`
          : '-'}
      </span>
    </>
  )
}
