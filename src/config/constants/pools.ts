import { PoolConfig, QuoteToken, PoolCategory } from './types'

const pools: PoolConfig[] = [
   {
    sousId: 0,
    tokenName: 'WMATIC',
    stakingTokenName: QuoteToken.CORN,
    stakingTokenAddress: '0xAed7fEEf34a836A5755f1C0C6CCD9968Df2d422a',
    contractAddress: {
      97: '',
      56: '',
     137: '0x1d36D99319D2BC8D13dCF4d8f126Cde6a2B83C3F'
    },
    poolCategory: PoolCategory.COMMUNITY,
    projectLink: 'https://corn.farm/',
    harvest: true,
    tokenPerBlock: '.000888',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
    message: '3 Day MATIC Pool'
  }, 
]

export default pools
