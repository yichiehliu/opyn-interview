import { InjectedConnector } from '@web3-react/injected-connector'

export enum ChainId {
  MAINNET = 1,
  ROPSTEN = 3,
  RINKEBY = 4,
  GÖRLI = 5,
  KOVAN = 42,

  MATIC = 137,
  MATIC_TESTNET = 80001,
  FANTOM = 250,
  FANTOM_TESTNET = 4002,
  XDAI = 100,
  BSC = 56,
  BSC_TESTNET = 97,

  ARBITRUM_ONE = 42161,
  ARBITRUM_RINKEBY = 421611,
  OPTIMISM = 10,
  OPTIMISTIC_KOVAN = 69,
  AVALANCHE = 43114,
}

export const injected = new InjectedConnector({
  supportedChainIds: [
    1, // mainnet
    3, // ropsten
    4, // rinkeby
    5, // goreli
    42, // kovan
    250, // fantom
    4002, // fantom testnet
    137, // matic
    80001, // matic testnet
    100, // xdai
    56, // binance smart chain
    97, // binance smart chain testnet
    43114, // avalanche
    42161, // arbitrum
    421611, // arbitrum testnet
    10, // optimism
    69, // optimism testnet
  ],
})

export const RPC = {
  [ChainId.MAINNET]: 'https://eth-mainnet.alchemyapi.io/v2/YOzdfYy8cOMoDPmMaink-Zbdwegmok32',
}
