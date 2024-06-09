import { Box, Button, FormControl, TextField, Typography } from '@mui/material';
import React from 'react';
import { Form, Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import style from './Cadastro.module.css';

const Cadastro = () => {
  const handleFetchData = async () => {
    try {
      const response = await fetch(
        'https://node-notification.azurewebsites.net/docs',
        {
          path: '/security/register',
          method: 'POST',
          body: JSON.stringify({
            name: 'string',
            username: 'string',
            password: 'string',
            email: 'string',
            phone: 'string',
            address: { city: 'string', state: 'string' },
          }),
        },
      );
      console.log(response);
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
          width: '380px',
          padding: 2,
          border: '1px solid #ccc',
          margin: 'auto',
          background: '#fff',
        }}
      >
        <Link to={'/'}>
          <ArrowBackIcon />
        </Link>
        <Typography
          sx={{
            fontSize: '30px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pb: '10px',
          }}
        >
          Cadastro
        </Typography>
        <TextField
          className={style.input}
          variant="filled"
          placeholder="Nome"
        ></TextField>
        <TextField
          className={style.input}
          variant="filled"
          placeholder="Username"
        ></TextField>
        <TextField
          variant="filled"
          placeholder="Email"
          className={style.input}
        ></TextField>
        <TextField
          variant="filled"
          placeholder="Password"
          className={style.input}
        ></TextField>
        <TextField
          variant="filled"
          placeholder="Phone"
          className={style.input}
        ></TextField>
        <Typography py={1}> Endereço </Typography>
        <FormControl sx={{ display: 'flex', flexDirection: 'row' }}>
          <TextField
            variant="filled"
            placeholder="Cidade"
            sx={{ paddingRight: 2 }}
            className={style.input}
          ></TextField>
          <TextField
            variant="filled"
            placeholder="Estado"
            className={style.input}
          ></TextField>
        </FormControl>

        <FormControl
          sx={{
            display: 'flex',
            flexDirection: 'row',
            mt: 2,
            justifyContent: 'space-evenly',
          }}
        >
          <Link to={'/'}>
            <Button onClick={handleFetchData}>Salvar</Button>
          </Link>
        </FormControl>
      </FormControl>
    </Box>
  );
};

export default Cadastro;
