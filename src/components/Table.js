import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

const PlantTable = ({headers,rows}) => {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="Table">
                <TableHead>
                    <TableRow>
                        {headers.map((header) => (
                            <TableCell><h4>{header}</h4></TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row,i) => (
                    <TableRow key={i}>
                        <TableCell align="left">{(row.name)?row.name:<p>No name found.</p>}</TableCell>
                        <TableCell align="left">{(row.last_update)?row.name:<p>No updates found.</p>}</TableCell>
                        <TableCell align="left">{(row.url)?<a href={row.url} target="_blank">View Website</a>:<p>No website found.</p>}
                        </TableCell>
                        <TableCell align="left">{(row.citation)?row.citation:<p>No citation found.</p>}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

PlantTable.propTypes = {
    headers: PropTypes.array,
    rows: PropTypes.array
}

export default PlantTable
