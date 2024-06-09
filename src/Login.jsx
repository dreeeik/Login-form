import React from 'react';
import TextField from '@mui/material/TextField';
import { Box, Button, FormControl, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Login = () => {
  const handleFetchData = async () => {
    try {
      const response = await fetch(
        'https://node-notification.azurewebsites.net/docs',
        {
          path: '/security/login',
          method: 'POST',
          body: JSON.stringify({
            username: 'string',
            password: 'string',
          }),
        },
      );
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Box
      display={'flex'}
      sx={{ justifyContent: 'center' }}
      bgcolor={'#ccc'}
      height={'100vh'}
    >
      <FormControl
        sx={{
          justifyContent: 'center',
          width: '300px',
          height: '370px',
          border: '1px solid #ccc',
          margin: 'auto',
          background: '#fff',
        }}
      >
        <Typography
          sx={{
            fontSize: '30px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pb: '10px',
          }}
        >
          Login
        </Typography>
        <TextField
          variant="filled"
          placeholder="Email"
          sx={{
            display: 'flex',
            px: 3,
          }}
        ></TextField>
        <TextField
          variant="filled"
          placeholder="Password"
          sx={{
            display: 'flex',
            px: 3,
          }}
        ></TextField>
        <FormControl
          sx={{
            display: 'flex',
            flexDirection: 'row',
            mt: '50px',
            justifyContent: 'space-evenly',
          }}
        >
          <Button>Login</Button>
          <Link to={'/cadastro'}>
            <Button>Cadastro</Button>
          </Link>
        </FormControl>
      </FormControl>
    </Box>
  );
};

export default Login;
