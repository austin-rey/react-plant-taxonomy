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
        borderRadius: '5px'
    },
    tableHead: {
        backgroundColor: '#f7f7f7'
    },
    cellName: {width: '10%'},
    cellLastUpdate: {width: '20%'},
    url: {width: '20%'},
    citation: {},
  });

const PlantTable = ({headers,rows}) => {
    const classes = useStyles();

    return (
        <TableContainer >
            <Table className={classes.table} aria-label="Table">
                <TableHead className={classes.tableHead}>
                    <TableRow>
                        {headers.map((header) => (
                            <TableCell><h4>{header}</h4></TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row,i) => (
                    <TableRow key={i}>
                        <TableCell className={classes.cellName} align="left">{(row.name)?row.name:<p>No name found</p>}</TableCell>
                        <TableCell className={classes.cellLastUpdate}  align="left">{(row.last_update)?row.last_update:<p>No updates found</p>}</TableCell>
                        <TableCell align="left" className={classes.url} >{(row.url)?<a href={row.url} target="_blank">View Website</a>:<p>No website found.</p>}
                        </TableCell>
                        <TableCell align="left" className={classes.citation} >{(row.citation)?row.citation:<p>No citation found</p>}</TableCell>
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
