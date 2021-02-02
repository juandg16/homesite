import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


function createData(name, players, createDate, endDate) {
  return { name, players, createDate, endDate };
}

const rows = [
  createData('dumb game', 5, '1/22/2021', ''),
  createData('Ice cream sandwich', 3, '1/31/2021', '2/22/2021'),
  createData('Eclair', 4, '1/22/2021', ''),
  createData('Cupcake', 6, '1/22/2021', ''),
  createData('Gingerbread', 8, '1/22/2021', '1/24/2021'),
];
  
function TIGames() {

    return (   
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Game Title</TableCell>
              <TableCell align="right">Players</TableCell>
              <TableCell align="right">Create Date</TableCell>
              <TableCell align="right">End Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.players}</TableCell>
                <TableCell align="right">{row.createDate}</TableCell>
                <TableCell align="right">{row.endDate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
}

export default TIGames;