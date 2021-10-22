import { StepDataType } from '../types'

export const opt = [
  { value: 'seconds', label: 'seconds' },
  { value: 'minutes', label: 'minutes' },
  { value: 'hours', label: 'hours' },
  { value: 'days', label: 'days' },
]

export const sellMarketStepData: StepDataType = [
  { desc: 'Enable WETH Wrapper', icon: 'toggle', buttonDesc: 'ENABLE WETH WRAPPER' },
  {
    desc: 'Approve collateral to Opyn Contracts',
    icon: 'toggle',
    buttonDesc: 'APPROVE COLLATERAL',
  },
  { desc: 'Permit oToken to wrapper contracts', icon: 'toggle', buttonDesc: 'PERMIT OTOKEN' },
  { desc: 'Permit, deposit, mint & trade', icon: 'check', buttonDesc: 'SUBMIT TRADE' },
]

export const sellLimitStepData: StepDataType = [
  { desc: 'Enable WETH Wrapper', icon: 'toggle', buttonDesc: 'ENABLE WETH WRAPPER' },
  {
    desc: 'Approve collateral to Opyn contracts',
    icon: 'toggle',
    buttonDesc: 'Approve collateral',
  },
  { desc: 'Deposit collateral and mint oTokens', icon: 'check', buttonDesc: 'DEPOSIT COLLATERAL' },
  { desc: 'Approve oToken to 0x trading contract', icon: 'toggle', buttonDesc: 'APPROVE OTOKEN' },
  { desc: 'Place Sell limit order', icon: 'check', buttonDesc: 'SUBMIT TRADE' },
]

export const buyLimitStepData: StepDataType = [
  {
    desc: 'Approve USDC to 0x trading contract',
    icon: 'toggle',
    buttonDesc: 'APPROVE USDC TO 0x',
  },
  { desc: 'Place limit, buy order', icon: 'check', buttonDesc: 'SUBMIT TRADE' },
]

export const buyMarketStepData: StepDataType = [
  { desc: 'Enable WETH Wrapper', icon: 'toggle', buttonDesc: 'ENABLE WETH WRAPPER' },
  { desc: 'Sign USDC to Wrapper Contract', icon: 'toggle', buttonDesc: 'SIGN USDC' },
  { desc: 'Permit & Buy oToken', icon: 'check', buttonDesc: 'SUBMIT TRADE' },
]
