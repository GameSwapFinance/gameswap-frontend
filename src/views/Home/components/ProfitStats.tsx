import React from 'react'
import { Card, CardBody, Heading, Text } from '@gameswapfinance/uikit'
import BigNumber from 'bignumber.js/bignumber'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import useBlock from 'hooks/useBlock'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getCakeAddress } from 'utils/addressHelpers'
import CardValue from './CardValue'
import { useFarms, usePriceCakeBusd } from '../../../state/hooks'

const StyledCakeStats = styled(Card)`
  margin-left: auto;
  margin-right: auto;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`

const ProfitStats = () => {
  const totalSupply = useTotalSupply()
  const burnedBalance = useBurnedBalance(getCakeAddress())
  const farms = useFarms()
  const block = useBlock()
  const startBlock = 17194555

  let eggPerBlock = 0
  if (farms && farms[0] && farms[0].eggPerBlock) {
    eggPerBlock = new BigNumber(farms[0].eggPerBlock).div(new BigNumber(10).pow(18)).toNumber()
  }

  // get total seconds between the times
  let delta = (startBlock- block) * 2.2;

  // calculate (and subtract) whole days
    const days = Math.floor(delta / 86400);
    delta -= days * 86400;

  // calculate (and subtract) whole hours
  const hours = Math.floor(delta / 3600) % 24;
  delta -= hours * 3600;

  // calculate (and subtract) whole minutes
  const minutes = Math.floor(delta / 60) % 60;
  delta -= minutes * 60;

  // what's left is seconds
  const seconds = Math.round(delta % 60);

  let message = ""
  if (block < startBlock){
    message = `Stonk Share Token Dividend Pool Begins in ${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
  }
  else if (block < startBlock + (12 * 60 * 60 / 2.25)){
    message = "StonkShare Token is live at Https://shares.stonk.farm!";
  }
 
  return (
    <Heading as="h2" color="secondary" mb="50px" style={{ textAlign: 'center' }}>
    {message}
  </Heading>
  )
}

export default ProfitStats
