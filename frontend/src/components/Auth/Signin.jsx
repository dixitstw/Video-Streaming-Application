import { Avatar, Box, Button, Container, CssBaseline, Grid, Link, TextField, Typography } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const theme = createTheme();

const Signin = (props) => {

  const { setIsLoggedIn } = props
  const [errorMessage, setErrorMessage] = useState('')
  let navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const formData = new FormData(event.currentTarget);
    const form = {
      email: formData.get('email'),
      password: formData.get('password')
    };
    const { data } = await axios.post('http://localhost:3000/user/signin', form);

    if(data.status === parseInt('401')) {
      setErrorMessage(data.response)
    }
    else {
      localStorage.setItem('token', data.token)
      setIsLoggedIn(true)
      navigate('/video')
    }

  };

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
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}></Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
             <Typography component="p" variant="p" color="red">
              {errorMessage}
            </Typography>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="/Signup" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="SignUp" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>

      </Container>
    </ThemeProvider>
  )
}

export default Signin