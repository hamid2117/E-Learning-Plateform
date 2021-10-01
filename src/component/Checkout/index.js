import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Paper from '@material-ui/core/Paper'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import AddressForm from './ShippingInfo'
import { useAuthContext } from './../../context/AuthContext'
import { Link, useHistory } from 'react-router-dom'
import PaymentForm from './PaymentForm'
import Review from './Review'
import { useCartContext } from './../../context/cart_context'

const useStyles = makeStyles((theme) => ({
  layout: {
    width: 'auto',
    height: '100%',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(3),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(5),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}))

const steps = ['Billing Detail', 'Review your order', 'Payment details']

export default function Checkout() {
  const { userdata } = useAuthContext()
  const { done } = useCartContext()
  const history = useHistory()
  const classes = useStyles()
  const [activeStep, setActiveStep] = React.useState(0)
  useEffect(() => {
    if (!userdata.email) {
      history.push('/account')
    }
  }, [userdata, userdata.email])
  const { token } = userdata
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const handleNext = () => {
    setActiveStep(activeStep + 1)
  }

  const handleBack = () => {
    setActiveStep(activeStep - 1)
  }

  function getStepContent(activeStep) {
    switch (activeStep) {
      case 0:
        return (
          <AddressForm
            handleNext={handleNext}
            activeStep={activeStep}
            handleBack={handleBack}
            steps={steps}
          />
        )
      case 1:
        return (
          <Review
            handleNext={handleNext}
            handleBack={handleBack}
            activeStep={activeStep}
            steps={steps}
          />
        )
      case 2:
        return (
          <PaymentForm
            handleNext={handleNext}
            handleBack={handleBack}
            activeStep={activeStep}
            steps={steps}
            config={config}
          />
        )
      default:
        throw new Error('Unknown step')
    }
  }

  return (
    <>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component='h1' variant='h4' align='center'>
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <>
            {activeStep === steps.length ? (
              <>
                <Typography variant='h5' gutterBottom>
                  Thank You for replacing order.
                </Typography>
                <Typography variant='subtitle1'>
                  Your order number is #
                  <span style={{ color: 'green', fontWeight: '600' }}>
                    {done}
                  </span>
                  We will give you an update about the order in your profile .
                  Then you able to pay to buy this course .
                </Typography>
                <div
                  style={{
                    display: 'grid',
                    placeItems: 'center',
                    margin: '40px 0px',
                    marginTop: '50px',
                  }}
                >
                  {done ? (
                    <Button
                      component={Link}
                      to='/profile'
                      variant='outlined'
                      color='primary'
                    >
                      Your Profile
                    </Button>
                  ) : (
                    <h4>Please try again something goes wronge</h4>
                  )}
                </div>
              </>
            ) : (
              <>{getStepContent(activeStep)}</>
            )}
          </>
        </Paper>
      </main>
    </>
  )
}
