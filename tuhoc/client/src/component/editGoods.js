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
import Select from '@mui/material/Select';
import { actionGoods } from '../redux/actions';
import { editDataGoods$ } from '../redux/selectors';

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

export default function EditGoods(props) {
  const { id } = props.match.params;
  const [data, setData] = useState({name: '', price: '', quantity: '', group: ''});
  const dispatch = useDispatch();
  const db = useSelector(editDataGoods$);
  dispatch(actionGoods.editDataGoods(id));
  console.log('db', db);
  React.useEffect(() => {
    setData(db);
  }, [db]);

  const onChage = useCallback(e => {
    const { name, value } = e.target;
    setData({...data, [name]: value});
  })
  const handleSubmit = useCallback(e => {
    e.preventDefault();
    dispatch(actionGoods.createGoods(data));
    window.history.back();
  }, [data, dispatch])

  return (
    <ThemeProvider theme={theme}>
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
            Sửa sản phẩm
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Tên sản phẩm"
              name="name"
              autoComplete="name"
              autoFocus
              value={data.name}
              onChange={onChage}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="price"
              label="Đơn giá vnd"
              type="number"
              id="price"
              autoComplete="current-price"
              value={data.price}
              onChange={onChage}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="quantity"
              label="Số lượng"
              type="number"
              id="quantity"
              autoComplete="current-quantity"
              value={data.quantity}
              onChange={onChage}
            />
            <Box sx={{ minWidth: 120, paddingTop: 2 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Nhóm hàng</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={data.group}
                    label="group"
                    name="group"
                    onChange={onChage}
                    >
                    <MenuItem value='Bánh'>Bánh</MenuItem>
                    <MenuItem value='Kẹo'>Kẹo</MenuItem>
                    <MenuItem value='Nước'>Nước</MenuItem>
                    <MenuItem value='Đồ gia dụng'>Đồ gia dụng</MenuItem>
                    </Select>
                </FormControl>
            </Box>
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
