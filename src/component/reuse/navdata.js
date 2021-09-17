import PaymentIcon from '@material-ui/icons/Payment'
const sublinks = [
  {
    page: 'courses',
    links: [
      { label: 'payment', icon: <PaymentIcon />, url: '/products' },
      { label: 'terminal', icon: <PaymentIcon />, url: '/products' },
      { label: 'connect', icon: <PaymentIcon />, url: '/products' },
    ],
  },
  {
    page: 'teachers',
    links: [
      { label: 'plugins', icon: <PaymentIcon />, url: '/products' },
      { label: 'libraries', icon: <PaymentIcon />, url: '/products' },
      { label: 'help', icon: <PaymentIcon />, url: '/products' },
      { label: 'billing', icon: <PaymentIcon />, url: '/products' },
    ],
  },
  {
    page: 'pages',
    links: [
      { label: 'about', icon: <PaymentIcon />, url: '/products' },
      { label: 'about', icon: <PaymentIcon />, url: '/products' },
      { label: 'about', icon: <PaymentIcon />, url: '/products' },
      { label: 'customers', icon: <PaymentIcon />, url: '/products' },
    ],
  },
]

export default sublinks
