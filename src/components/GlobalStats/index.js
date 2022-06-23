import React from 'react'
import styled from 'styled-components'
import { RowFixed, RowBetween } from '../Row'
import { useMedia } from 'react-use'
import { useGlobalData, useEthPrice } from '../../contexts/GlobalData'
import { formattedNum, localNumber } from '../../utils'
import { nearClient } from '../../apollo/client'
import { axios } from 'axios'
import { TYPE } from '../../Theme'
import { SWAP_FEE_TO_LP } from '../../constants'
import { UseGetClient } from '../../hooks'

const Header = styled.div`
  width: 100%;
  position: sticky;
  top: 0;
`

const Medium = styled.span`
  font-weight: 500;
`

export default function GlobalStats() {
  const below1295 = useMedia('(max-width: 1295px)')
  const below1180 = useMedia('(max-width: 1180px)')
  const below1024 = useMedia('(max-width: 1024px)')
  const below400 = useMedia('(max-width: 400px)')
  const below816 = useMedia('(max-width: 816px)')

  let { oneDayVolumeUSD, oneDayTxns, pairCount } = useGlobalData()
  const [ethPrice] = useEthPrice()
  const oneDayFees = oneDayVolumeUSD ? formattedNum(oneDayVolumeUSD * SWAP_FEE_TO_LP, true) : ''
  const cliento = UseGetClient()
  let mainToken = 0;
  let formattedEthPrice = 0;
  if (cliento === nearClient) {
    formattedEthPrice = 0
    oneDayTxns = 0
    pairCount = 0
    mainToken = "Near"
  }
  else {
    formattedEthPrice = ethPrice ? formattedNum(ethPrice, true) : '-'
    mainToken = "AVAX"
  }
  return (

    <Header>
      <RowBetween style={{ padding: below816 ? '0.5rem' : '.5rem' }}>
        <RowFixed>
          {!below400 && (
            <TYPE.main mr={'1rem'} style={{ position: 'relative' }}>
              {mainToken} Price: <Medium>{formattedEthPrice}</Medium>
            </TYPE.main>
          )}

          {!below1180 && (
            <TYPE.main mr={'1rem'}>
              Transactions (24H): <Medium>{localNumber(oneDayTxns)}</Medium>
            </TYPE.main>
          )}
          {!below1024 && (
            <TYPE.main mr={'1rem'}>
              Pairs: <Medium>{localNumber(pairCount)}</Medium>
            </TYPE.main>
          )}
          {!below1295 && (
            <TYPE.main mr={'1rem'}>
              Fees (24H): <Medium>{localNumber(oneDayFees)}</Medium>&nbsp;
            </TYPE.main>
          )}
        </RowFixed>
      </RowBetween>
    </Header>
  )
}
