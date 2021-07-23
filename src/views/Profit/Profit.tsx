import React from 'react'
import { Route, useRouteMatch } from 'react-router-dom'
import BigNumber from 'bignumber.js'
import styled from 'styled-components'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { Heading } from '@gameswapfinance/uikit'
import { BLOCKS_PER_YEAR } from 'config'
import orderBy from 'lodash/orderBy'
import partition from 'lodash/partition'
import useI18n from 'hooks/useI18n'
import useBlock from 'hooks/useBlock'
import { getBalanceNumber } from 'utils/formatBalance'
import { useFarms, usePriceBnbBusd, usePriceCakeBusd, usePools, usePoolFromPid } from 'state/hooks'
import { QuoteToken, PoolCategory } from 'config/constants/types'
import FlexLayout from 'components/layout/Flex'
import Page from 'components/layout/Page'
import Coming from './components/Coming'
import MoonPoolComing from './components/MoonPoolComing'
import CakeStats from './components/CakeStats'
import PoolCard from './components/PoolCard'
import PoolTabButtons from './components/PoolTabButtons'
import Divider from './components/Divider'

const Farm: React.FC = () => {
  const { path } = useRouteMatch()
  const TranslateString = useI18n()
  const { account } = useWallet()
  const farms = useFarms()
  const pools = usePools(account)
  const bnbPriceUSD = usePriceBnbBusd()
  const block = useBlock()

  const priceToBnb = (tokenName: string, tokenPrice: BigNumber, quoteToken: QuoteToken): BigNumber => {
    const tokenPriceBN = new BigNumber(tokenPrice)
    if (tokenName === 'BNB') {
      return new BigNumber(1)
    }
    if (tokenPrice && quoteToken === QuoteToken.BUSD) {
      return tokenPriceBN.div(bnbPriceUSD)
    }
    return tokenPriceBN
  }

  const poolsWithApy = pools.map((pool) => {
    const isBnbPool = pool.poolCategory === PoolCategory.BINANCE
    const rewardTokenFarm = farms.find((f) => f.tokenSymbol === pool.tokenName)
    const stakingTokenFarm = farms.find((s) => s.tokenSymbol === pool.stakingTokenName)

    // /!\ Assume that the farm quote price is BNB
    const stakingTokenPriceInBNB = isBnbPool ? new BigNumber(1) : new BigNumber(stakingTokenFarm?.tokenPriceVsQuote)
    const rewardTokenPriceInBNB = priceToBnb(
      pool.tokenName,
      rewardTokenFarm?.tokenPriceVsQuote,
      rewardTokenFarm?.quoteTokenSymbol,
    )
    let totalRewardPricePerYear = new BigNumber(0);

    const totalBlocks = pool.endBlock - pool.startBlock;
    const totalBlocksPerYear = 365 * 24 * 60 * 60 / 2.1;
    const tokensPerYear = totalBlocksPerYear * parseFloat(pool.tokenPerBlock);

    if(pool.sousId === 0)
    {
      totalRewardPricePerYear = new BigNumber( 7000 * 1.3 / 3 * 365) // @HACK hard code value for now rewardTokenPriceInBNB.times(pool.tokenPerBlock).times(BLOCKS_PER_YEAR)
    }
    else if (pool.sousId === 3){
      totalRewardPricePerYear = new BigNumber( 50 * 200 / 3 * 365) // @HACK hard code value for now rewardTokenPriceInBNB.times(pool.tokenPerBlock).times(BLOCKS_PER_YEAR)
    }
    else{ // works for WMATIC
      totalRewardPricePerYear = new BigNumber(tokensPerYear).multipliedBy(bnbPriceUSD);
    }
    
    

    const totalStakingTokenInPool = stakingTokenPriceInBNB.times(getBalanceNumber(pool.totalStaked))
    const apy =  totalRewardPricePerYear.div(totalStakingTokenInPool).times(100)
    // console.log(`${pool.sousId} ${totalRewardPricePerYear.toNumber()} / ${totalStakingTokenInPool.toNumber()} * 100`);
    
    return {
      ...pool,
      isFinished: pool.sousId === 0 ? false : pool.isFinished || block > pool.endBlock,
      apy,
    }
  })

  const [finishedPools, openPools] = partition(poolsWithApy, (pool) => pool.isFinished)

  return (
    <Page>
      <Hero>
        <div>
          <Heading as="h1" size="xxl" mb="16px">
            {TranslateString(282, 'Flash Pools')}
          </Heading>
          <ul>
            <li>Stake non-native tokens to earn Stonk Shares.</li>
            <li>New pool added every two days.</li>
            <li>Each pool will last for seven days.</li>
          </ul>
        </div>
        <img src="/images/syrup.png" alt="SYRUP POOL icon" width={410} height={191} />
      </Hero>
      <br />

      <PoolTabButtons />
      <Divider />
      <FlexLayout>
        <Route exact path={`${path}`}>
          <>
            {orderBy(openPools, ['sortOrder']).map((pool) => (
              <PoolCard key={pool.sousId} pool={pool} />
            ))}
          </>
          <Coming/>
        </Route>
        <Route path={`${path}/history`}>
          {orderBy(finishedPools, ['sortOrder']).map((pool) => (
            <PoolCard key={pool.sousId} pool={pool} />
          ))}
        </Route>
      </FlexLayout>
    </Page>
  )
}

const Hero = styled.div`
  align-items: center;
  color: ${({ theme }) => theme.colors.primary};
  display: grid;
  grid-gap: 32px;
  grid-template-columns: 1fr;
  margin-left: auto;
  margin-right: auto;
  max-width: 250px;
  padding: 48px 0;
  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
    font-size: 16px;
    li {
      margin-bottom: 4px;
    }
  }
  img {
    height: auto;
    max-width: 100%;
  }
  @media (min-width: 576px) {
    grid-template-columns: 1fr 1fr;
    margin: 0;
    max-width: none;
  }
`

export default Farm
