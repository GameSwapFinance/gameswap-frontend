import { MenuEntry } from '@gameswapfinance/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Buy Corn',
    icon: 'TradeIcon',
    href: 'https://quickswap.exchange/#/swap?outputCurrency=0xAed7fEEf34a836A5755f1C0C6CCD9968Df2d422a',
  },
  {
    label: 'Stake Liquidity',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Stake Tokens',
    icon: 'PoolIcon',
    href: '/nests',
  },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  {
    label: 'Corn Dividends',
    icon: 'TicketIcon',
    href: '/profit',
  },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  {
    label: 'Road Map',
    icon: 'RoadmapIcon',
    href: 'https://gameswapfinance.gitbook.io/gameswap/roadmap',
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Corn Chart',
        href: 'https://polygon.poocoin.app/tokens/0xaed7feef34a836a5755f1c0c6ccd9968df2d422a'
      },
      {
        label: 'Contracts',
        href: 'https://gameswapfinance.gitbook.io/poly-unicorn/security/contracts',
      },
      {
        label: 'Docs',
        href: 'https://gameswapfinance.gitbook.io/poly-unicorn/',
      },
      {
        label: 'Medium',
        href: 'https://medium.com/@gameswapfinance',
      }
    ],
  },
  {
    label: 'Rug Doc Security Review (Coming Soon)',
    icon: 'AuditIcon',
    href: 'https://rugdoc.io/project/corn-farm/',
  }, 
]

export default config
