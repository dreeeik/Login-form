import {
  Box,
  Button,
  FormControl,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { Form, Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import style from "./Cadastro.module.css";

const Cadastro = () => {
  const handleFetchData = async () => {
    try {
      const response = await fetch(
        "https://node-notification.azurewebsites.net/docs",
        {
          path: "/security/register",
          method: "POST",
          body: JSON.stringify({
            name: "string",
            username: "string",
            password: "string",
            email: "string",
            phone: "string",
            address: { city: "string", state: "string" },
          }),
        }
      );
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Grid
      container
      display={"flex"}
      sx={{ justifyContent: "center" }}
      bgcolor={"#ccc"}
    >
      <Grid
        container
        gap={1}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        width={380}
        p={2}
        bgcolor={"#fff"}
      >
        <Link to={"/"}>
          <ArrowBackIcon />
        </Link>
        <Typography
          sx={{
            fontSize: "25px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Cadastro
        </Typography>

        <TextField
          className={style.input}
          variant="filled"
          placeholder="Nome"
        />
        <TextField
          className={style.input}
          variant="filled"
          placeholder="Username"
        />
        <TextField
          variant="filled"
          placeholder="Email"
          type="email"
          className={style.input}
        />
        <TextField
          variant="filled"
          type="password"
          placeholder="Password"
          className={style.input}
        />
        <TextField
          variant="filled"
          placeholder="Phone"
          className={style.input}
        />

        <Typography py={1}> Endereço </Typography>

        <FormControl sx={{ display: "flex", flexDirection: "row" }}>
          <TextField
            variant="filled"
            placeholder="Cidade"
            sx={{ paddingRight: 2 }}
            className={style.input}
          />
          <TextField
            variant="filled"
            placeholder="Estado"
            className={style.input}
          />
        </FormControl>

        <FormControl
          sx={{
            display: "flex",
            flexDirection: "row",
            pt: 2,
            justifyContent: "space-evenly",
          }}
        >
          <Link to={"/"}>
            <Button onClick={handleFetchData}>Salvar</Button>
          </Link>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default Cadastro;
