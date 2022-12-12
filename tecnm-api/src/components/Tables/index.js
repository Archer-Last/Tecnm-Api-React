import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Tables = (props) => {
    const {value,name,id,css_styles,handleClick,rows} = props

    return(
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
          <TableCell>#</TableCell>
            <TableCell>Nombre</TableCell>
            <TableCell align="right">Semestre</TableCell>
            <TableCell align="right">Periodo</TableCell>
            <TableCell align="right">Curp</TableCell>
            <TableCell align="right">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row,index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              
              <TableCell component="th" scope="row">
                {index + 1} 
              </TableCell>
              <TableCell component="th" scope="row">
                {row.nombre} {row.apellidopaterno} {row.apellidomaterno}
              </TableCell>
              <TableCell align="right">{row.alumnosemestre.semestre}</TableCell>
              <TableCell align="right">{row.periodo.periodo}</TableCell>
              <TableCell align="right">{row.curp}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    )
}

export default Tables
