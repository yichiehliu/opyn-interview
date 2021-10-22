import React from 'react'
import { Web3ReactProvider, createWeb3ReactRoot } from '@web3-react/core'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { GlobalStyle } from './styles'

import Home from '@pages/Home'
import NotFound from '@pages/NotFound'

import getLibrary from '@libs/getLibrary'
import { NetworkContextName } from './constants'

const Web3ProviderNetwork = createWeb3ReactRoot(NetworkContextName)

const App: React.FC = () => (
  <Web3ReactProvider getLibrary={getLibrary}>
    <Web3ProviderNetwork getLibrary={getLibrary}>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </Web3ProviderNetwork>
  </Web3ReactProvider>
)
export default App
