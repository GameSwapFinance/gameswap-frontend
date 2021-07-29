import { PoolConfig, QuoteToken, PoolCategory } from './types'

const pools: PoolConfig[] = [
  // 0x4F3F3EA447229416A79773a288e94dC16D4d144B
  // 0.001219512195121951
  {
    sousId: 1,
    tokenName: 'STONKS',
    stakingTokenName: QuoteToken.WMATIC,
    stakingTokenAddress: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270', // WMATIC
    contractAddress: {
      97: '',
      56: '',
     137: '0x4F3F3EA447229416A79773a288e94dC16D4d144B'
    },
    poolCategory: PoolCategory.COMMUNITY,
    projectLink: 'https://shares.stonk.farm/',
    harvest: true,
    tokenPerBlock: '0.001219512195121951',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
    message: '7 Day MATIC Flash Pool'
  }, 
  // 0x00b14210A535325D62D4C08e1dE6dF08DFd26076
  // 0.001219512195121951
  {
    sousId: 2,
    tokenName: 'STONKS',
    stakingTokenName: QuoteToken.USDC,
    stakingTokenAddress: '0x2791bca1f2de4661ed88a30c99a7a9449aa84174', // USDC
    contractAddress: {
      97: '',
      56: '',
     137: '0x00b14210A535325D62D4C08e1dE6dF08DFd26076'
    },
    poolCategory: PoolCategory.COMMUNITY,
    projectLink: 'https://shares.stonk.farm/',
    harvest: true,
    tokenPerBlock: '0.001219512195121951',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
    message: '7 Day USDC Flash Pool'
  },
]

export default pools
