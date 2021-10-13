import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useCallback } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
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
import { signUp } from '../redux/actions';



const theme = createTheme();

export default function SignUp() {
  const [user, setUser] = useState({numberPhone: '', pass: '', name: '', position: ''});
  const dispatch = useDispatch();
  const onChage = useCallback(e => {
    const { name, value } = e.target;
    setUser({...user, [name]: value});
  })
  const handleSubmit = useCallback(e => {
    e.preventDefault();
    dispatch(signUp.signUp(user));
  }, [user, dispatch])

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
            Sign up
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="numberPhone"
                    label="Number Phone"
                    name="numberPhone"
                    autoComplete="numberPhone"
                    autoFocus
                    value={user.numberPhone}
                    onChange={onChage}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="pass"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={user.pass}
                    onChange={onChage}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="name"
                    label="Name"
                    type="name"
                    id="name"
                    autoComplete="current-name"
                    value={user.name}
                    onChange={onChage}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box sx={{ minWidth: 120, paddingTop: 2 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Position</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={user.position}
                            label="Position"
                            name="position"
                            onChange={onChage}
                            >
                            <MenuItem value='staff'>Staff</MenuItem>
                            <MenuItem value='manage'>Menage</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Grid>
                
                <Grid item xs={12}>
                    <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    >
                    Sign Up
                    </Button>
                </Grid>
                
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
