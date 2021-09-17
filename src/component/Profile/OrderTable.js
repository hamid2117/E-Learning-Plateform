import React from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import DoneIcon from '@material-ui/icons/Done'
import Paper from '@material-ui/core/Paper'
import InfoIcon from '@material-ui/icons/Info'
import { IconButton } from '@material-ui/core'
import { Button } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { Link } from 'react-router-dom'
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell)

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow)

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein }
}

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
})

export default function CustomizedTables({ data }) {
  const classes = useStyles()
  const matches = useMediaQuery('(max-width:500px)')

  const rows = [
    { name: 'frozen', calories: 212, fat: 323, carbs: 223, protein: 232 },
  ]
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label='customized table'>
        <TableHead>
          <TableRow>
            {matches
              ? ['Id', 'Delivered', ''].map((text, index) => {
                  return <StyledTableCell key={index}>{text}</StyledTableCell>
                })
              : ['Id', 'Date', 'Total', 'Paid', 'Delivered', ''].map(
                  (text, index) => {
                    return <StyledTableCell key={index}>{text}</StyledTableCell>
                  }
                )}
          </TableRow>
        </TableHead>
        <TableBody>
          {data &&
            data.map((row, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell component='th' scope='row'>
                  {row._id.substring(0, 10)}
                </StyledTableCell>
                {!matches && (
                  <StyledTableCell>
                    {row.createdAt.substring(0, 10)}
                  </StyledTableCell>
                )}
                {!matches && (
                  <StyledTableCell>{row.total_amount}</StyledTableCell>
                )}
                {!matches && (
                  <StyledTableCell>
                    {row.paidAt ? (
                      row.paidAt.substring(0, 10)
                    ) : (
                      <CloseIcon
                        color='secondary'
                        style={{ fontSize: '30px' }}
                      />
                    )}
                  </StyledTableCell>
                )}
                {!matches && (
                  <StyledTableCell>
                    {row.isDelivered ? (
                      <DoneIcon style={{ fontSize: '30px', color: 'green' }} />
                    ) : (
                      <CloseIcon
                        color='secondary'
                        style={{ fontSize: '30px' }}
                      />
                    )}
                  </StyledTableCell>
                )}
                <StyledTableCell>
                  {matches ? (
                    <IconButton component={Link} to={`/order/${row._id}`}>
                      <InfoIcon />
                    </IconButton>
                  ) : (
                    <Button
                      component={Link}
                      to={`/order/${row._id}`}
                      variant='contained'
                    >
                      Detail
                    </Button>
                  )}
                </StyledTableCell>
                {matches && (
                  <StyledTableCell>
                    {row.isDelivered ? (
                      <DoneIcon style={{ fontSize: '30px', color: 'green' }} />
                    ) : (
                      <CloseIcon
                        color='secondary'
                        style={{ fontSize: '30px' }}
                      />
                    )}
                  </StyledTableCell>
                )}
              </StyledTableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
