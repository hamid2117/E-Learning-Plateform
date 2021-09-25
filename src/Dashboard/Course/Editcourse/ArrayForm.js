import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button, TextField, Divider, IconButton, Grid } from '@material-ui/core'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import { useGlobalContext } from './../../../context/courseContext'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'

const useStyles = makeStyles((theme) => ({
  gridItem: {
    display: 'grid',
    gap: '20px 30px',
    gridTemplateColumns: '75% auto',
    marginBottom: '20px',
  },
}))

const NewItem = () => {
  const classes = useStyles()
  const {
    AddItem_Cart,
    learn,
    Delete_Cart,
    handleChangeItem,
    requirement,
    handleChangeRequirement,
    AddItem_Requirement,
    Delete_Requirement,
    target,
    handleChangeTarget,
    AddItem_Target,
    Delete_Target,
    handleChangeMaterial,
    AddItem_Material,
    Delete_Material,
    material,
  } = useGlobalContext()

  return (
    <>
      <Grid container spacing={10}>
        <Grid xs={12} sm={6} item>
          {learn.map((data, index) => {
            const { _id, point } = data
            return (
              <>
                <form key={index} className={classes.gridItem}>
                  <TextField
                    id={_id}
                    required
                    label='Benefits of this course'
                    variant='outlined'
                    name='point'
                    type='text'
                    value={point}
                    onChange={handleChangeItem}
                  />
                  {learn.length !== 1 && (
                    <div>
                      <IconButton onClick={() => Delete_Cart(_id)}>
                        <DeleteForeverIcon />
                      </IconButton>
                    </div>
                  )}
                </form>
                <Divider style={{ marginBottom: '20px' }} />
              </>
            )
          })}
          <Button
            style={{ width: '100%' }}
            startIcon={<ShoppingBasketIcon />}
            onClick={() => AddItem_Cart()}
          >
            Add Benefit
          </Button>
        </Grid>
        <Grid xs={12} sm={6} item>
          {requirement.map((data, index) => {
            const { _id, point } = data
            return (
              <>
                <form key={index} className={classes.gridItem}>
                  <TextField
                    id={_id}
                    required
                    label='Requirements for this course'
                    variant='outlined'
                    name='point'
                    type='text'
                    value={point}
                    onChange={handleChangeRequirement}
                  />
                  {requirement.length !== 1 && (
                    <div>
                      <IconButton onClick={() => Delete_Requirement(_id)}>
                        <DeleteForeverIcon />
                      </IconButton>
                    </div>
                  )}
                </form>
                <Divider style={{ marginBottom: '20px' }} />
              </>
            )
          })}
          <Button
            style={{ width: '100%' }}
            startIcon={<ShoppingBasketIcon />}
            onClick={() => AddItem_Requirement()}
          >
            Add Requirement
          </Button>
        </Grid>
        <Grid xs={12} sm={6} item>
          {target.map((data, index) => {
            const { _id, point } = data
            return (
              <>
                <form key={index} className={classes.gridItem}>
                  <TextField
                    id={_id}
                    required
                    label='Main target of this course'
                    variant='outlined'
                    name='point'
                    type='text'
                    value={point}
                    onChange={handleChangeTarget}
                  />
                  {target.length !== 1 && (
                    <div>
                      <IconButton onClick={() => Delete_Target(_id)}>
                        <DeleteForeverIcon />
                      </IconButton>
                    </div>
                  )}
                </form>
                <Divider style={{ marginBottom: '20px' }} />
              </>
            )
          })}
          <Button
            style={{ width: '100%' }}
            startIcon={<ShoppingBasketIcon />}
            onClick={() => AddItem_Target()}
          >
            Add a Target
          </Button>
        </Grid>
        <Grid xs={12} sm={6} item>
          {material.map((data, index) => {
            const { _id, heading } = data
            return (
              <>
                <form key={index} className={classes.gridItem}>
                  <TextField
                    id={_id}
                    required
                    label='Main Features & Material'
                    variant='outlined'
                    name='heading'
                    type='text'
                    value={heading}
                    onChange={handleChangeMaterial}
                  />
                  {material.length !== 1 && (
                    <div>
                      <IconButton onClick={() => Delete_Material(_id)}>
                        <DeleteForeverIcon />
                      </IconButton>
                    </div>
                  )}
                </form>
                <Divider style={{ marginBottom: '20px' }} />
              </>
            )
          })}
          <Button
            style={{ width: '100%' }}
            startIcon={<ShoppingBasketIcon />}
            onClick={() => AddItem_Material()}
          >
            Add a Material
          </Button>
        </Grid>
      </Grid>
    </>
  )
}

export default NewItem
