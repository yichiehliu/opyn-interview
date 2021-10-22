import React from 'react'
import { Web3ReactProvider, createWeb3ReactRoot } from '@web3-react/core'
import { GlobalStyle } from './styles'
import { Router } from '@reach/router'

import Home from '@pages/Home'
import NotFound from '@pages/NotFound'

import getLibrary from '@libs/getLibrary'
import { NetworkContextName } from './constants'

const Web3ProviderNetwork = createWeb3ReactRoot(NetworkContextName)

const App: React.FC = () => (
  <Web3ReactProvider getLibrary={getLibrary}>
    <Web3ProviderNetwork getLibrary={getLibrary}>
      <GlobalStyle />
      <Router primary={false}>
        <NotFound path="/not-found" default />
        <Home path="/" />
      </Router>
    </Web3ProviderNetwork>
  </Web3ReactProvider>
)
export default App
