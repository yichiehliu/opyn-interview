export type StepDataType = { desc: string; icon: 'toggle' | 'check'; buttonDesc: string }[]

export type OrderDataType = {
  orderType: 'buy' | 'sell'
  priceType: 'market' | 'limit'
  currentStep: number
}
