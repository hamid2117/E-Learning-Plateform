import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  TextField,
  Button,
  Grid,
  InputLabel,
  Select,
  MenuItem,
} from '@material-ui/core'
import { useFormik } from 'formik'
import axios from 'axios'
import { toast } from 'react-toastify'

const useStyles = makeStyles((theme) => ({
  main: {
    display: 'grid ',
    width: '80%',
    gap: '10px',
    '@media (max-width: 500px)': {},
  },
}))

const Formm = ({ config, id, setNewData, Apis }) => {
  const classes = useStyles()

  const onSubmit = async (value) => {
    const { ...data } = value
    try {
      const { data: dataa } = await axios.put(
        `${Apis}course/${id}`,
        data,
        config
      )
      if (dataa) {
        setNewData(dataa)
        toast.success('Course Data is updated.', {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
        formik.resetForm()
      }
    } catch (error) {
      console.log(error)
    }
  }

  const formik = useFormik({
    initialValues: {
      heading: '',
      category: '',
      language: '',
      level: 'Beginner',
      price: '',
      duration: '',
      lessons: '',
      maxStudent: '',
      description: '',
    },
    onSubmit,
  })

  return (
    <>
      <form onSubmit={formik.handleSubmit} className={classes.main}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              id='heading'
              fullWidth
              name='heading'
              variant='standard'
              label='Course Title'
              value={formik.values.heading}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id='category'
              name='category'
              variant='standard'
              label='Category'
              value={formik.values.category}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id='language'
              fullWidth
              name='language'
              variant='standard'
              label='Coures Language'
              value={formik.values.language}
              onChange={formik.handleChange}
              multiline
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputLabel id='select-filled-label'>Select your level</InputLabel>
            <Select
              label='select-filled-label'
              className={classes.selected}
              name='level'
              fullWidth
              id='level'
              required
              onChange={formik.handleChange}
              value={formik.values.level}
            >
              <MenuItem value={'Beginner'}>Beginner</MenuItem>
              <MenuItem value={'Inter'}>Inter</MenuItem>
              <MenuItem value={'Expert'}>Expert</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id='price'
              name='price'
              variant='standard'
              label='Price'
              type='number'
              value={formik.values.price}
              onChange={formik.handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id='duration'
              name='duration'
              variant='standard'
              type='number'
              label='Duration'
              value={formik.values.duration}
              onChange={formik.handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id='lessons'
              name='lessons'
              variant='standard'
              type='number'
              label='Lessons'
              value={formik.values.lessons}
              onChange={formik.handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id='maxStudent'
              name='maxStudent'
              variant='standard'
              type='number'
              label='Max Student'
              value={formik.values.maxStudent}
              onChange={formik.handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id='description'
              name='description'
              variant='standard'
              type='number'
              label='Description'
              value={formik.values.description}
              onChange={formik.handleChange}
              multiline
              rows={4}
              rowsMax={6}
              fullWidth
            />
          </Grid>
        </Grid>
        <Button variant='outlined' color='primary' type='submit'>
          Edit
        </Button>
      </form>
    </>
  )
}
export default Formm
// import React from 'react'
// import 'date-fns'
// import { makeStyles } from '@material-ui/core/styles'
// import { Button, TextField, Divider, IconButton } from '@material-ui/core'
// import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
// import { useGlobalContext } from '../../../../context/UpdateContext'
// import DeleteForeverIcon from '@material-ui/icons/DeleteForever'

// const useStyles = makeStyles((theme) => ({
//   gridItem: {
//     display: 'grid',
//     gridTemplateColumns: '30% 10% 15% 15% 6% 15%',
//     gap: '20px 30px',
//     marginBottom: '20px',
//   },
// }))

// const NewItem = () => {
//   const classes = useStyles()
//   const { AddItem_Cart, itemCart, Delete_Cart, handleChangeItem } =
//     useGlobalContext()

//   return (
//     <>
//       {itemCart.map((data, index) => {
//         const { id, Name, Quantity, Price, Discount, Amount } = data
//         return (
//           <>
//             <form key={index} className={classes.gridItem}>
//               <TextField
//                 id={id}
//                 required
//                 label='Name of Item'
//                 variant='outlined'
//                 name='Name'
//                 type='text'
//                 value={Name}
//                 onChange={handleChangeItem}
//               />
//               <TextField
//                 id={id}
//                 name='Quantity'
//                 label='Quantity'
//                 variant='outlined'
//                 required
//                 type='number'
//                 value={Quantity}
//                 onChange={handleChangeItem}
//               />
//               <TextField
//                 id={id}
//                 label='Pirce'
//                 name='Price'
//                 variant='outlined'
//                 required
//                 type='number'
//                 onChange={handleChangeItem}
//                 value={Price}
//               />
//               <TextField
//                 id={id}
//                 label='Discount'
//                 name='Discount'
//                 variant='outlined'
//                 required
//                 type='number'
//                 value={Discount}
//                 onChange={handleChangeItem}
//               />
//               <div>
//                 <span>Amount : </span>
//                 <h5>{Amount}Rs</h5>
//               </div>
//               {itemCart.length !== 1 && (
//                 <div>
//                   <IconButton onClick={() => Delete_Cart(id)}>
//                     <DeleteForeverIcon />
//                   </IconButton>
//                 </div>
//               )}
//             </form>
//             <Divider style={{ marginBottom: '20px' }} />
//           </>
//         )
//       })}
//       <Button
//         style={{ width: '100%' }}
//         startIcon={<ShoppingBasketIcon />}
//         onClick={() => AddItem_Cart()}
//       >
//         Add a Item
//       </Button>
//     </>
//   )
// }

// export default NewItem
