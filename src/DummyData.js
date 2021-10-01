import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import TwitterIcon from '@material-ui/icons/Twitter'
import PinterestIcon from '@material-ui/icons/Pinterest'
import Certificate from './img/certificate.png'
import Skills from './img/skills.png'
import Teacher from './img/teacher.png'
import UsersIcon from '@material-ui/icons/GroupOutlined'
import DashboardIcon from '@material-ui/icons/DashboardOutlined'
import CollectionsBookmarkIcon from '@material-ui/icons/CollectionsBookmark'
import NotInterestedIcon from '@material-ui/icons/NotInterested'
import SpeakerNotesIcon from '@material-ui/icons/SpeakerNotes'

export const Sidebar = [
  // {
  //   id: 1,
  //   link: '/dashboard',
  //   heading: 'Dashboard',
  //   Icon: DashboardIcon,
  // },
  {
    id: 2,
    // link: '/userlist',
    link: '/dashboard',
    heading: 'Userlist ',
    Icon: UsersIcon,
  },
  {
    id: 3,
    link: '/coursedashboard',
    heading: 'Courses',
    Icon: CollectionsBookmarkIcon,
  },
  // {
  //   id: 4,
  //   link: '/feedbacklist',
  //   heading: 'Feedback',
  //   Icon: SpeakerNotesIcon,
  // },
  // {
  //   id: 5,
  //   link: '/unverified',
  //   heading: 'Unverified',
  //   Icon: NotInterestedIcon,
  // },
]

export const social = [
  {
    id: 1,
    Icon: TwitterIcon,
    link: 'www.twitter.com',
  },
  {
    id: 2,
    Icon: FacebookIcon,
    link: 'www.facebook.com',
  },
  {
    id: 3,
    Icon: PinterestIcon,
    link: 'www.pinterest.com',
  },
  {
    id: 4,
    Icon: InstagramIcon,
    link: 'www.instagram.com',
  },
]

export const heroCard = [
  {
    id: 1,
    Icon: Skills,
    tilte: 'Learn Skills',
    para: 'with unlimited courses',
  },
  {
    id: 2,
    Icon: Teacher,
    tilte: 'Expert Teachers',
    para: 'Best & highly qaulify',
  },
  {
    id: 3,
    Icon: Certificate,
    tilte: 'Certificates',
    para: 'value all over the world',
  },
]

export const rows = [
  {
    isAdmin: false,
    _id: '1212121',
    name: 'Ahmed Ali ',
    email: 'hamid@gmail.com',
    teacher: false,
    createdAt: '12-6-2021',
  },
]

export const review = [
  {
    id: '12413',
    name: 'Ali Sattar',
    work: 'Android developer',
    review:
      'This is one of the good websites where a person can learn from any domain and any field at a very affordable costs..... This is useful and beneficial for the both tutors and the students who are learning from it... Thanks Zilom...',
  },
  {
    id: '12413',
    name: 'Ayan Khalil',
    work: 'Blockchain developer',
    review:
      'I come across this learning platform This course is good for the whom are entering in the finance, Perfect skill trainer they have and make this course perfect. I will highly recommend for the those who are entering in finance.',
  },
  {
    id: '3232',
    name: 'Yousef ',
    work: 'Bio Technolgy',
    review:
      "Many of my coworkers choose to use Udemy for continuing education. I feel it has the best selection, training and curriculum vs others I have tried. Yes, the courses may be longer than others, but they're more detailed.",
  },
  {
    id: '11213',
    name: 'Dani Nawaz',
    work: 'Full stack developer',
    review:
      "Utilized a trial account, forgot to cancel and didn't use services. Was refused a refund. Contacted support and got a copy paste answer. Have used Zilom a lot in the past but won't anymore unless they get some common sense.",
  },
  {
    id: '122313',
    name: 'Muneeb Shah',
    work: 'Data scientist',
    review:
      'This is one of the good websites where a person can learn from any domain and any field at a very affordable costs..... This is useful and beneficial for the both tutors and the students who are learning from it... Thanks Zilom...',
  },
  {
    id: '1245443',
    name: 'Ahmed Mehmood',
    work: 'Investor',
    review:
      'I come across this learning platform This course is good for the whom are entering in the finance, Perfect skill trainer they have and make this course perfect. I will highly recommend for the those who are entering in finance.',
  },
]
