import PaymentIcon from '@material-ui/icons/Payment'
import {
  BookOutlined,
  ShoppingBasket,
  Error,
  AccountBoxOutlined,
  PersonOutline,
  Contacts,
  PersonPin,
  InfoOutlined,
} from '@material-ui/icons'

const sublinks = [
  {
    page: 'courses',
    links: [
      { label: 'All Courses', icon: <BookOutlined />, url: '/course' },
      { label: 'Basket', icon: <ShoppingBasket />, url: '/basket' },
      { label: 'Checkout', icon: <PaymentIcon />, url: '/checkout' },
    ],
  },
  {
    page: 'teachers',
    links: [
      { label: 'Teacher Courses', icon: <PersonPin />, url: '/tcourselist' },
      { label: 'Courses', icon: <BookOutlined />, url: '/course' },
    ],
  },
  {
    page: 'pages',
    links: [
      { label: 'About', icon: <InfoOutlined />, url: '/about' },
      { label: 'Contact', icon: <Contacts />, url: '/contact' },
      { label: 'Profile', icon: <PersonOutline />, url: '/profile' },
      { label: 'Account', icon: <AccountBoxOutlined />, url: '/account' },
      { label: '404 Page', icon: <Error />, url: '/fasdfasdf' },
    ],
  },
]

export default sublinks
