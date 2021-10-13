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
import Minus from '@mui/icons-material/Minimize';
import TextField from '@mui/material/TextField';
import { Button, Fab, Input, Link } from '@mui/material';
import { getDataGoods$ } from '../redux/selectors';
import { actionGoods, saveData } from '../redux/actions';
import arDZ from 'date-fns/esm/locale/ar-DZ/index';

export default function AllGoods(props) {
  const [goods, setGoods] = useState([]);
  const dispatch = useDispatch();

  const data = useSelector(getDataGoods$);

  useEffect(() => {
    dispatch(actionGoods.getDataGoods());
  },[dispatch]);

  if (props.save) {
    dispatch(saveData.saveData(goods))
  }

  const onChange = (e, db) => {
    const ar = {name: db.name, price: db.price, quantity: e.target.value};
    if (goods.length != 0) {
        for(let i = 0; i < goods.length; i++) {
            if (goods[i].name === ar.name) {
                goods.splice(i,1);
                if (ar.quantity != '') {
                    setGoods(oldArray => [...oldArray,ar] )
                }
            }else setGoods(oldArray => [...oldArray,ar] )
        }
    } else setGoods(oldArray => [...oldArray,ar] )
   
  }

  return (
    <TableContainer component={Paper}>
      <div style={{width: "100%", height: 50, backgroundColor: 'lightgray', textAlignLast: 'center', paddingTop: '2%'}}>Danh sách sản phẩm</div>
      <Table sx={{ minWidth: 750 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Tên sản phẩm </TableCell>
            <TableCell align="center">Đơn giá</TableCell>
            <TableCell align="center">Số lượng còn lại</TableCell>
            <TableCell align="center">Nhóm hàng</TableCell>
            <TableCell align="center" width="20%">Số lượng</TableCell>
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

                <Input style={{width: 50}} onChange={(e) => onChange(e, db)}/>
                {/* <Button onClick={() => setGoods(oldArray => [...oldArray,db] )}>
                    <Minus style={{marginTop: '-14'}}/>
                </Button>

                <p>5</p>

                <Button>
                    <Add />
                </Button> */}
                
                </TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
}
