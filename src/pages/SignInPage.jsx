import React, { useState } from 'react';
import axios from 'axios';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom'; 
import BackToMainMenuButton from '../components/BackToMainBtn';

function SignInPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await axios.post('http://80.72.180.130:8581/api/user/login', {
        username,
        password,
      });

      if (response.status === 200) {
        localStorage.setItem('authToken', response.data.token);
        window.location.href = "/";
      } else {
        setError('Ошибка авторизации');
      }
    } catch (error) {
      setError('Ошибка при отправке запроса');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>  
      <BackToMainMenuButton/>
      <ThemeProvider theme={createTheme()}>
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
              Вход
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                value={username}
                autoFocus
                onChange={(event)=> setUsername(event.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Пароль"
                type="password"
                id="password"
                value={password}
                autoComplete="current-password"
                onChange={(event)=> setPassword(event.target.value)}
              />
              {error && <Typography color="error">{error}</Typography>}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                disabled={loading}
              >
                {loading ? 'Вход...' : 'Войти'}
              </Button>
              <Grid container>                
                <Grid item>
                  <RouterLink to="/sign-up" variant="body2">
                    {"Нет аккаунта? Зарегистрируйтесь"}
                  </RouterLink>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default SignInPage;
