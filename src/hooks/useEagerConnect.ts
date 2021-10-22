import { useEffect, useState } from 'react'

import { injected } from '../connectors'
import { useWeb3React as useWeb3ReactCore } from '@web3-react/core'

function useEagerConnect(): boolean {
  const { activate, active } = useWeb3ReactCore()
  const [tried, setTried] = useState(false)

  useEffect(() => {
    injected.isAuthorized().then(isAuthorized => {
      if (isAuthorized) {
        activate(injected, undefined, true).catch(() => {
          setTried(true)
        })
      } else {
        setTried(true)
      }
    })
  }, [activate])

  useEffect(() => {
    if (active) {
      setTried(true)
    }
  }, [active])

  return tried
}

export default useEagerConnect
