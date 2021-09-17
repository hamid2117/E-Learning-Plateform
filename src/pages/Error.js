import { Helmet } from 'react-helmet'
import { Box, Container, Typography, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import Imagi from './../img/undraw_page_not_found_su7k.svg'

const NotFound = () => (
  <section style={{ margin: '120px 0px', marginBottom: '180px' }}>
    <Helmet>
      <title>404 | Not Found</title>
    </Helmet>
    <Box
      style={{
        backgroundColor: 'background.default',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'center',
      }}
    >
      <Container maxWidth='md'>
        <Typography align='center' color='textPrimary' variant='h4'>
          404: The page you are looking for isn’t here
        </Typography>
        <Typography align='center' color='textPrimary' variant='subtitle2'>
          You either tried some shady route or you came here by mistake.
          Whichever it is, try using the navigation
        </Typography>
        <Box style={{ textAlign: 'center' }}>
          <img
            alt='Under development'
            src={Imagi}
            style={{
              marginTop: 50,
              display: 'inline-block',
              maxWidth: '100%',
              width: 560,
            }}
          />
        </Box>
        <div
          style={{ margin: '30px 0px', display: 'grid', placeItems: 'center' }}
        >
          <Button component={Link} to='/' variant='contained' color='secondary'>
            Go Back Home
          </Button>
        </div>
      </Container>
    </Box>
  </section>
)

export default NotFound
