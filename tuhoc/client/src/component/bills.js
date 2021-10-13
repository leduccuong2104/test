import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useCallback, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Edit from '@mui/icons-material/Edit';
import Delete from '@mui/icons-material/Delete';
import Add from '@mui/icons-material/Add';
import Info from '@mui/icons-material/Info';
import { Fab, Link } from '@mui/material';
import { getDataGoods$ } from '../redux/selectors';
import { actionGoods } from '../redux/actions';

export default function Bill() {

  const dispatch = useDispatch();

  const data = useSelector(getDataGoods$);

  useEffect(() => {
    dispatch(actionGoods.getDataGoods());
  },[dispatch]);

  return (
    <TableContainer component={Paper}>
      <div style={{width: "100%", height: 50, backgroundColor: 'lightgray', textAlignLast: 'center', paddingTop: '2%'}}>Hóa đơn bán hàng</div>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <Link href="/addBill">
          <Fab style={{position: 'fixed', right: 20, bottom: 20}}> 
              <Add />
          </Fab>
        </Link>
        <TableHead>
          <TableRow>
            <TableCell>Họ tên khách hàng</TableCell>
            <TableCell align="center">Ngày lập</TableCell>
            <TableCell align="center">Tổng tiền</TableCell>
            <TableCell align="center" width="15%">Chức năng</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            data.map((db) => (
              <TableRow
                key={db.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {db.name}
                </TableCell>
                <TableCell align="center">{db.price}</TableCell>
                <TableCell align="center">{db.quantity}</TableCell>
                <TableCell align="center" style={{display: 'flex', justifyContent: 'space-around'}}>
                <Info />
                <Link href={`/editGoods/${db._id}`}>
                  <Edit />
                </Link>
                <Delete />
                </TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
}
