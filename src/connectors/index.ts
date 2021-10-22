import { InjectedConnector } from '@web3-react/injected-connector'

const ChainId = {
  MAINNET: 1,
}

export const injected = new InjectedConnector({
  supportedChainIds: [
    1, // mainnet
  ],
})

export const RPC = {
  [ChainId.MAINNET]: 'https://eth-mainnet.alchemyapi.io/v2/YOzdfYy8cOMoDPmMaink-Zbdwegmok32',
}
