export const links =[
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x357Ee5b0B8c270Bd4ED5a517d0f086878Cd96F8E',// tochange add in token
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.pancakeswap.finance/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Nests',
    icon: 'PoolIcon',
    href: '/nests',
  },
  {
    label: 'Referrals',
    icon: 'GroupsIcon',
    href: '/referrals',
  },
  {
    label: 'Features',
    icon: 'RoadmapIcon',
    items: [
      {
        label: 'FairPlay Technology',
        href: 'https://docs.neutronswap.com/fair-play-technology/anti-botters',
      },
      {
        label: 'Automatic Emission Reduction',
        href: 'https://docs.neutronswap.com/tokenomics/automatic-emission-reduction',
      },
      {
        label: 'Automatic Liquidity',
        href: 'https://docs.neutronswap.com/tokenomics/automatic-liquidity',
      },
      {
        label: 'Automatic Burning',
        href: 'https://docs.neutronswap.com/tokenomics/automatic-burning',
      }
    ],
  },
  {
    label: 'Charts',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap (Available on launch)', // tochange name
        href: 'https://pancakeswap.info/token/0x357Ee5b0B8c270Bd4ED5a517d0f086878Cd96F8E',
      },
      {
        label: 'AstroTools (Available on launch)',
        href: 'https://app.astrotools.io/pancake-pair-explorer/', // egg-bnb token here.
      },
      {
        label: 'PooCoin (Available on launch)',
        href: 'https://poocoin.app/tokens/0x357ee5b0b8c270bd4ed5a517d0f086878cd96f8e',
      },
    ],
  },
  {
    label: 'Security and Audits',
    icon: 'AuditIcon',
    items: [
      {
        label: 'Audits',
        href: 'https://docs.neutronswap.com/security/audits',
      },
      {
        label: 'No Migrator Code',
        href: 'https://docs.neutronswap.com/security/no-migrator-code',
      },
      {
        label: 'Emergency Withdraw',
        href: 'https://docs.neutronswap.com/security/time-lock',
      },
      {
        label: 'Timelock',
        href: 'https://docs.neutronswap.com/security/emergency-withdraw',
      },
    ],
  },
  {
    label: 'Links',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/NeutronSwap/',
      },
      {
        label: 'Docs',
        href: 'https://docs.neutronswap.com/',
      },
      {
        label: 'Blog',
        href: 'https://neutronswap.medium.com/',
      },
    ],
  },
]

export const socials = [
  {
    label: "Telegram",
    icon: "TelegramIcon",
    href: "https://t.me/NeutronSwap"
  },
  {
    label: "Twitter",
    icon: "TwitterIcon",
    href: "https://twitter.com/NeutronSwap",
  },
  {
    label: "Reddit",
    icon: "RedditIcon",
    href: "https://www.reddit.com/r/NeutronSwap",
  },
];

export const MENU_HEIGHT = 64;
export const MENU_ENTRY_HEIGHT = 48;
export const SIDEBAR_WIDTH_FULL = 240;
export const SIDEBAR_WIDTH_REDUCED = 56;