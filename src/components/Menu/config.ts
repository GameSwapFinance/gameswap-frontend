import { MenuEntry } from '@gameswapfinance/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Buy StonkShares',
    icon: 'TradeIcon',
    href: 'https://quickswap.exchange/#/swap?outputCurrency=0xcd7199ba48a75b8885cd3e916596472d1a5763b7',
  },
  {
    label: 'Stake StonkShares',
    icon: 'FarmIcon',
    href: '/farms',
  },
  // {
  //   label: 'Stake Tokens',
  //   icon: 'PoolIcon',
  //   href: '/nests',
  // },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  {
    label: 'Stake in Flash Pools',
    icon: 'TicketIcon',
    href: '/profit',
  },
   {
     label: 'Vote for Features',
     icon: 'NftIcon',
     href: 'https://snapshot.org/#/game-swap.eth',
   },
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
        label: 'StonkS Chart',
        href: 'https://info.quickswap.exchange/token/0xcd7199ba48a75b8885cd3e916596472d1a5763b7'
      },
      {
        label: 'Github',
        href: 'https://github.com/gameswapfinance/',
      },
      {
        label: 'Docs',
        href: 'https://gameswapfinance.gitbook.io/gameswap/',
      },
      {
        label: 'Medium',
        href: 'https://medium.com/@gameswapfinance',
      }
    ],
  },
  {
    label: 'Rug Doc Security Review',
    icon: 'AuditIcon',
    href: 'https://rugdoc.io/project/stonk-shares/',
  }, 
]

export default config
