import { StepDataType, StepIconType } from '../types'

export const opt = [
  { value: 'seconds', label: 'seconds' },
  { value: 'minutes', label: 'minutes' },
  { value: 'hours', label: 'hours' },
  { value: 'days', label: 'days' },
]

export const sellMarketStepData: StepDataType = [
  { desc: 'Enable WETH Wrapper', icon: StepIconType.TOGGLE, buttonDesc: 'ENABLE WETH WRAPPER' },
  {
    desc: 'Approve collateral to Opyn Contracts',
    icon: StepIconType.TOGGLE,
    buttonDesc: 'APPROVE COLLATERAL',
  },
  {
    desc: 'Permit oToken to wrapper contracts',
    icon: StepIconType.TOGGLE,
    buttonDesc: 'PERMIT OTOKEN',
  },
  { desc: 'Permit, deposit, mint & trade', icon: StepIconType.CHECK, buttonDesc: 'SUBMIT TRADE' },
]

export const sellLimitStepData: StepDataType = [
  { desc: 'Enable WETH Wrapper', icon: StepIconType.TOGGLE, buttonDesc: 'ENABLE WETH WRAPPER' },
  {
    desc: 'Approve collateral to Opyn contracts',
    icon: StepIconType.TOGGLE,
    buttonDesc: 'APPROVE COLLATERAL',
  },
  {
    desc: 'Deposit collateral and mint oTokens',
    icon: StepIconType.CHECK,
    buttonDesc: 'DEPOSIT COLLATERAL',
  },
  {
    desc: 'Approve oToken to 0x trading contract',
    icon: StepIconType.TOGGLE,
    buttonDesc: 'APPROVE OTOKEN',
  },
  { desc: 'Place Sell limit order', icon: StepIconType.CHECK, buttonDesc: 'SUBMIT TRADE' },
]

export const buyLimitStepData: StepDataType = [
  {
    desc: 'Approve USDC to 0x trading contract',
    icon: StepIconType.TOGGLE,
    buttonDesc: 'APPROVE USDC TO 0x',
  },
  { desc: 'Place limit, buy order', icon: StepIconType.CHECK, buttonDesc: 'SUBMIT TRADE' },
]

export const buyMarketStepData: StepDataType = [
  { desc: 'Enable WETH Wrapper', icon: StepIconType.TOGGLE, buttonDesc: 'ENABLE WETH WRAPPER' },
  { desc: 'Sign USDC to Wrapper Contract', icon: StepIconType.TOGGLE, buttonDesc: 'SIGN USDC' },
  { desc: 'Permit & Buy oToken', icon: StepIconType.CHECK, buttonDesc: 'SUBMIT TRADE' },
]
