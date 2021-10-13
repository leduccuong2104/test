import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useCallback } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import Select from '@mui/material/Select';
import Edit from '@mui/icons-material/Edit';
import Delete from '@mui/icons-material/Delete';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { actionClients, actionGoods, add } from '../redux/actions';
import Add from './add';
import { saveData$ } from '../redux/selectors';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function AddBill() {
  const [value, setValue] = React.useState(null);
  const [data, setData] = useState({name: '',date: '10/10/2021', money: '', bill: []});
  console.log('data', data)
  const dispatch = useDispatch();

  const dataBill = useSelector(saveData$);

  const onChage = useCallback(e => {
    const { name, value } = e.target;
    setData({...data, [name]: value});
  })
  const handleSubmit = useCallback(e => {
    e.preventDefault();
    dispatch(actionClients.createClients(data));
    // window.history.back();
  }, [data, dispatch])

  const openAdd = useCallback(() => {
    dispatch(add.openAdd())
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <Add />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Tạo đơn hàng
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate>
            <Grid container>
            <Grid item xs={12} sm={7}>
                <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Tên khách hàng"
                name="name"
                autoComplete="name"
                autoFocus
                value={data.name}
                onChange={onChage}
                />
            </Grid>
            <Grid item xs={12} sm={4.5} paddingTop={2} marginLeft={2}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                    label="Ngày lập"
                    name="date"
                    value={value}
                    onChange={(newValue) => {
                      setValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                />
                </LocalizationProvider>
            </Grid> 
            <Grid item xs={12} sm={7}>
              <TextField
                margin="normal"
                required
                fullWidth
                label="Tổng tiền"
                type="number"
                name="money"
                autoComplete="money"
                autoFocus
                value={data.money}
                onChange={onChage}
              />
            </Grid>
            <Grid item xs={12} sm={4} marginLeft={2} marginTop={2} fullWidth>
            <Button variant="contained" onClick={openAdd}>Thêm sản phẩm</Button>
            </Grid>
            <TableContainer component={Paper}>
              <div style={{width: "100%", height: 50, backgroundColor: 'lightgray', textAlignLast: 'center', paddingTop: '2%'}}>Quản lý sản phẩm</div>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Tên sản phẩm </TableCell>
                    <TableCell align="center">Đơn giá</TableCell>
                    <TableCell align="center">Số lượng</TableCell>
                    <TableCell align="center">Thành tiền</TableCell>
                    <TableCell align="center" width="20%">Chức năng</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {
                    dataBill.map((db) => (
                      <TableRow
                        key={db.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell component="th" scope="row">
                          {db.name}
                        </TableCell>
                        <TableCell align="center">{db.price}</TableCell>
                        <TableCell align="center">{db.quantity}</TableCell>
                        <TableCell align="center">{db.price * db.quantity}</TableCell>
                        <TableCell align="center" style={{display: 'flex', justifyContent: 'space-around'}}>
                        <Link>
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
            
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Lưu
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
