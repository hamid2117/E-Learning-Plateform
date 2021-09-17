import React,{useState} from 'react';
import {TextField,Button,IconButton,InputAdornment,CssBaseline,Link ,Grid,makeStyles,Container, MenuItem, Select, InputLabel} from '@material-ui/core';
import {useFormik} from 'formik'
import * as yup from "yup";
import axios from 'axios';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import {RegisterApi} from "../../Api"
import {toast} from "react-toastify"
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(-2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    transition:'all 0.2s ease',
    background:
      'linear-gradient(90deg, rgba(55,100,235,1) 12%, rgba(75,116,237,1) 32%, rgba(95,131,239,1) 53%, rgba(115,147,241,1) 68%, rgba(135,162,243,1) 80%, rgba(175,193,247,1) 94%)',
    color:"white",
  },
  genderAndcalender:{
   display:'grid',
   gridTemplateColumns:'1fr 1fr ',
   paddingLeft:'5px',
   '@media (max-width: 500px)': {
   gridTemplateColumns:'1fr  ',
   marginBottom:'-15px',
   padding:'-15px',
    },
   
  },

  gender:{
   marginBottom:'-10px',
   padding:'-10px',
    '@media (max-width: 500px)': {
        marginTop:'8px',
      paddingLeft:'8px'
    },
  },
 emailField:{
   marginBottom:'-8px', padding:'-8px',marginTop:'-8px',
   '@media (max-width: 500px)': {
            marginTop:'5px',
      },
 },
 firstNamee:{
   marginBottom:'-5px',
   padding:'-8px',
   marginTop:'-13px',
  '@media (max-width: 500px)': {
    marginTop:'-23px',
    marginBottom:'0px',
   },
},
 lastNamee:{marginBottom:'-10px', padding:'-10px',marginTop:'-13px',
 '@media (max-width: 500px)': {
       marginBottom:'0px'
      },
},
}));
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const validationSchema = yup.object({
  name:yup.string().min(3,'Please enter your real Name').required('Name is required'),
  address: yup.string().min(7,'Please enter your real Address').required('Address is required'),
  email:yup.string().email('Please enter a valid email address').required("Email is required"),
  password:yup.string().min(8,'Please enter strong password').required("Password is required")
})

export default function SignUp({changeExpands}) {
  const classes = useStyles();
  const [emailerror, setEmailerror] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const onSubmit = async(value)=>{
    const {...data} = value
  const response = await axios.post(`${RegisterApi}`,data).catch((e)=>{ if(e&&e.response){
    if(e.response.status=== 409){
       setEmailerror(true)
    }else{
      toast.error("Can't register your account at this moment")
    }
  }})
   if(response && response.data){
    formik.resetForm()
    setEmailerror(false)
   toast.success("Your account is regitsterd")
   toast.success("Please confirm your email .")
    setTimeout(() => {
      changeExpands()
    }, 800);
    
   }
  }
   const handleClickShowPassword = () => {
    setShowPassword((e)=>!e)
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


  const formik = useFormik({initialValues:{name:'',address:'',email:'',password:'',teacher:false},validateOnBlur:true,onSubmit , validationSchema})
  
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
    
        <form className={classes.form} onSubmit={formik.handleSubmit}  >
          <Grid container spacing={2}>
            <Grid item xs={12} >
              <TextField
                autoComplete="name"
                name="name"
                variant="standard"
                style={{padding:-2}}
                required
                error={formik.touched.name && formik.errors.name? true:false  }
                helperText={formik.touched.name && formik.errors.name ? formik.errors.name :null}
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                fullWidth
                className={classes.firstNamee}
                id="name"
                label="name"
                autoFocus
                />
            </Grid>

            <Grid item xs={12} >
              <TextField
                label="Address"
                variant="standard"
                required
                fullWidth
                value={formik.values.address}
                onChange={formik.handleChange}
                id="address"
                onBlur={formik.handleBlur}
                error={formik.touched.address && formik.errors.address ? true:false  }
                helperText={formik.touched.address && formik.errors.address ? formik.errors.address :null}
                name="address"
                autoComplete="address"
                style={{marginTop:'-9px',marginBottom:'-8px'}}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="standard"
                required
                fullWidth
                className={classes.emailField}
                id="email"
                label="Email Address"
                error={formik.touched.email && formik.errors.email ? true:false || emailerror ?true:false }
                helperText={formik.touched.email && formik.errors.email ? formik.errors.email :null || emailerror ?"Email is already registered":null}
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="standard"
                required
                fullWidth
                value={formik.values.password}
                error={formik.touched.password && formik.errors.password ? true:false  }
                helperText={formik.touched.password && formik.errors.password ? formik.errors.password :null}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                style={{marginTop:'-6px'}}
                type={showPassword ? 'text' : 'password'}
                name="password"
                label="Password"
                id="password"
                autoComplete="current-password"
               InputProps={{
                endAdornment: (
                <InputAdornment>
                  <IconButton
                    aria-label='password'
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge='end'
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
              />
            </Grid>
            <Grid item xs={12}>
              <InputLabel id='select-filled-label'>Role</InputLabel>
              <Select
                labelId='select-filled-label'
                id='teacher'
                name='teacher'
                fullWidth
                value={formik.values.teacher}
                onChange={formik.handleChange}
              >
                <MenuItem value={false}>Student</MenuItem>
                <MenuItem value={true}>Teacher</MenuItem>
              </Select>
            </Grid>
          </Grid>
         <Button
            type="submit"
            variant="contained"
            fullWidth
            color="primary"
            className={classes.submit}
            disabled={!formik.isValid}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link onClick={() =>changeExpands() } variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}