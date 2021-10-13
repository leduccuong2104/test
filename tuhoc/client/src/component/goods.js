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
import { Fab, Link } from '@mui/material';
import { getDataGoods$ } from '../redux/selectors';
import { actionGoods } from '../redux/actions';

export default function Goods() {

  const dispatch = useDispatch();

  const data = useSelector(getDataGoods$);

  useEffect(() => {
    dispatch(actionGoods.getDataGoods());
  },[dispatch]);

  return (
    <TableContainer component={Paper}>
      <div style={{width: "100%", height: 50, backgroundColor: 'lightgray', textAlignLast: 'center', paddingTop: '2%'}}>Quản lý sản phẩm</div>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <Link href="/addGoods">
          <Fab style={{position: 'fixed', right: 20, bottom: 20}}> 
              <Add />
          </Fab>
        </Link>
        <TableHead>
          <TableRow>
            <TableCell>Tên sản phẩm </TableCell>
            <TableCell align="center">Đơn giá</TableCell>
            <TableCell align="center">Số lượng còn lại</TableCell>
            <TableCell align="center">Nhóm hàng</TableCell>
            <TableCell align="center" width="10%">Chức năng</TableCell>
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
                <TableCell align="center">{db.group}</TableCell>
                <TableCell align="center" style={{display: 'flex', justifyContent: 'space-around'}}>
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
