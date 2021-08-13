import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  // await CreatePool('0xAed7fEEf34a836A5755f1C0C6CCD9968Df2d422a', 500, 0); // Native token
  {
    pid: 0,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'CORN-USDC',
    lpAddresses: {
      97: '',
      56: '',
      137: '0x0f854bb0f5c0f56b8ef792ee8e10ca429b1f7d2e', // CORN-USDC
    },
    tokenSymbol: 'CORN',
    tokenAddresses: {
      97: '',
      56: '',
      137: '0xAed7fEEf34a836A5755f1C0C6CCD9968Df2d422a',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  // await CreatePool('0x0f854bb0f5c0f56b8ef792ee8e10ca429b1f7d2e', 1000, 0); // Native lp
  {
    pid: 1,
    risk: 5,
    isTokenOnly: false,
    lpSymbol: 'CORN-USDC',
    lpAddresses: {
      97: '',
      56: '',
      137: '0x0f854bb0f5c0f56b8ef792ee8e10ca429b1f7d2e', // CORN-USDC
    },
    tokenSymbol: 'CORN',
    tokenAddresses: {
      97: '',
      56: '',
      137: '0xAed7fEEf34a836A5755f1C0C6CCD9968Df2d422a',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  // await CreatePool('0x7ceb23fd6bc0add59e62ac25578270cff1b9f619', 50, 4); // WETH 
  {
    pid: 2,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'WETH-USDC',
    lpAddresses: {
      97: '',
      56: '',
      137: '0x853ee4b2a13f8a742d64c8f088be7ba2131f670d', // 
    },
    tokenSymbol: 'WETH',
    tokenAddresses: {
      97: '',
      56: '',
      137: '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  // await CreatePool('0x2791bca1f2de4661ed88a30c99a7a9449aa84174', 50, 4); // USDC 
  {
    pid: 3,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'USDC-USDT',
    lpAddresses: {
      97: '',
      56: '',
      137: '0x2cf7252e74036d1da831d11089d326296e64a728', // 
    },
    tokenSymbol: 'USDC',
    tokenAddresses: {
      97: '',
      56: '',
      137: '0x2791bca1f2de4661ed88a30c99a7a9449aa84174',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  // await CreatePool('0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270', 50, 4); // Wmatic
  {
    pid: 4,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'WMATIC-USDC',
    lpAddresses: {
      97: '',
      56: '',
      137: '0x6e7a5fafcec6bb1e78bae2a1f0b612012bf14827', // 
    },
    tokenSymbol: 'WMATIC',
    tokenAddresses: {
      97: '',
      56: '',
      137: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  // await CreatePool('0xc2132d05d31c914a87c6611c10748aeb04b58e8f', 50, 4); // USDT
  {
    pid: 5,
    risk: 2,
    isTokenOnly: true,
    lpSymbol: 'USDT',
    lpAddresses: {
      97: '',
      56: '',
      137: '0x2cf7252e74036d1da831d11089d326296e64a728', // USDT - USDC
    },
    tokenSymbol: 'USDT',
    tokenAddresses: {
      97: '',
      56: '',
      137: '0xc2132d05d31c914a87c6611c10748aeb04b58e8f', // USDT
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    tokenDecimals: 18,
  },
  // await CreatePool('0xa3Fa99A148fA48D14Ed51d610c367C61876997F1', 50, 4); // MiMatic
  {
    pid: 6,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'MIMATIC-USDC',
    lpAddresses: {
      97: '',
      56: '',
      137: '0x160532d2536175d65c03b97b0630a9802c274dad', // 
    },
    tokenSymbol: 'MIMATIC',
    tokenAddresses: {
      97: '',
      56: '',
      137: '0xa3Fa99A148fA48D14Ed51d610c367C61876997F1',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  // await CreatePool('0xf6a637525402643b0654a54bead2cb9a83c8b498', 50, 4); // WBTC
  {
    pid: 7,
    isTokenOnly: true,
    risk: 2,
    lpSymbol: 'WBTC-USDC',
    lpAddresses: {
      97: '',
      56: '',
      137: '0xf6a637525402643b0654a54bead2cb9a83c8b498', // WBTC - USDC
    },
    tokenSymbol: 'WBTC',
    tokenAddresses: {
      97: '',
      56: '',
      137: '0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6', // WBTC
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    tokenDecimals: 18,
  },
  // await CreatePool('0x831753dd7087cac61ab5644b308642cc1c33dc13', 50, 4); // Quick
  {
    pid: 8,
    risk: 3,
    lpSymbol: 'QUICK-USDC',
    lpAddresses: {
      97: '',
      56: '',
      137: '0x1f1e4c845183ef6d50e9609f16f6f9cae43bc9cb', // QUICK - USDC
    },
    tokenSymbol: 'QUICK',
    tokenAddresses: {
      97: '',
      56: '',
      137: '0x831753dd7087cac61ab5644b308642cc1c33dc13', // QUICK
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    tokenDecimals: 18,
  }, 
  // await CreatePool('0x8f3cf7ad23cd3cadbd9735aff958023239c6a063', 50, 4); // Dai
  {
    pid: 9,
    isTokenOnly: true,
    risk: 3,
    lpSymbol: 'DAI-USDC',
    lpAddresses: {
      97: '',
      56: '',
      137: '0xf04adbf75cdfc5ed26eea4bbbb991db002036bdd', // DAI - USDC
    },
    tokenSymbol: 'DAI',
    tokenAddresses: {
      97: '',
      56: '',
      137: '0x8f3cf7ad23cd3cadbd9735aff958023239c6a063', // DAI
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    tokenDecimals: 18,
  }, 
  // await CreatePool('0xc3fdbadc7c795ef1d6ba111e06ff8f16a20ea539', 50, 4); // Addy
  {
    pid: 10,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'ADDY-USDC',
    lpAddresses: {
      97: '',
      56: '',
      137: '0xb674ec53adc1d72a2a25d2b5109a766ce6ad1083', // 
    },
    tokenSymbol: 'ADDY',
    tokenAddresses: {
      97: '',
      56: '',
      137: '0xc3fdbadc7c795ef1d6ba111e06ff8f16a20ea539',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  // await CreatePool('0x4A81f8796e0c6Ad4877A51C86693B0dE8093F2ef', 50, 5); // ICE
  {
    pid: 11,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'ICE-USDC',
    lpAddresses: {
      97: '',
      56: '',
      137: '0x34832d9ac4127a232c1919d840f7aae0fcb7315b', // 
    },
    tokenSymbol: 'ICE',
    tokenAddresses: {
      97: '',
      56: '',
      137: '0x4A81f8796e0c6Ad4877A51C86693B0dE8093F2ef',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  // await CreatePool('0x853ee4b2a13f8a742d64c8f088be7ba2131f670d', 100, 4); // WETH-USDC
  {
    pid: 12,
    risk: 5,
    isTokenOnly: false,
    lpSymbol: 'WETH-USDC',
    lpAddresses: {
      97: '',
      56: '',
      137: '0x853ee4b2a13f8a742d64c8f088be7ba2131f670d', // 
    },
    tokenSymbol: 'WETH',
    tokenAddresses: {
      97: '',
      56: '',
      137: '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  // await CreatePool('0xadbf1854e5883eb8aa7baf50705338739e558e5b', 100, 4); // WETH-WMatic
  {
    pid: 13,
    risk: 5,
    isTokenOnly: false,
    lpSymbol: 'WETH-WMATIC',
    lpAddresses: {
      97: '',
      56: '',
      137: '0xadbf1854e5883eb8aa7baf50705338739e558e5b', // 
    },
    tokenSymbol: 'WETH',
    tokenAddresses: {
      97: '',
      56: '',
      137: '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619',
    },
    quoteTokenSymbol: QuoteToken.WMATIC, // @HACK this should be wmatic
    quoteTokenAdresses: contracts.wbnb,
  },
  // await CreatePool('0x2cf7252e74036d1da831d11089d326296e64a728', 100, 4); // USDT-USDC
  {
    pid: 14,
    risk: 2,
    isTokenOnly: false,
    lpSymbol: 'USDT-USDC',
    lpAddresses: {
      97: '',
      56: '',
      137: '0x2cf7252e74036d1da831d11089d326296e64a728', // USDT - USDC
    },
    tokenSymbol: 'USDT',
    tokenAddresses: {
      97: '',
      56: '',
      137: '0xc2132d05d31c914a87c6611c10748aeb04b58e8f', // USDT
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    tokenDecimals: 18,
  },
  // await CreatePool('0x160532d2536175d65c03b97b0630a9802c274dad', 100, 4); // miMatic-USDC
  {
    pid: 15,
    risk: 5,
    isTokenOnly: false,
    lpSymbol: 'MIMATIC-USDC',
    lpAddresses: {
      97: '',
      56: '',
      137: '0x160532d2536175d65c03b97b0630a9802c274dad', // 
    },
    tokenSymbol: 'MIMATIC',
    tokenAddresses: {
      97: '',
      56: '',
      137: '0xa3Fa99A148fA48D14Ed51d610c367C61876997F1',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  // await CreatePool('0x6e7a5fafcec6bb1e78bae2a1f0b612012bf14827', 100, 4); // wmatic-usdc
  {
    pid: 16,
    risk: 5,
    isTokenOnly: false,
    lpSymbol: 'WMATIC-USDC',
    lpAddresses: {
      97: '',
      56: '',
      137: '0x6e7a5fafcec6bb1e78bae2a1f0b612012bf14827', // 
    },
    tokenSymbol: 'WMATIC',
    tokenAddresses: {
      97: '',
      56: '',
      137: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  }
]

export default farms
