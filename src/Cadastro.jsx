import {
  Button,
  FormControl,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Cadastro = () => {
  const { register, handleSubmit } = useForm();

  const handleFetchData = async (data) => {
    const BASE_URL = "https://node-notification.azurewebsites.net";
    try {
      const response = await fetch(`${BASE_URL}/security/register`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        mode: "cors",
        body: JSON.stringify({
          name: data.name,
          username: data.username,
          email: data.email,
          password: data.password,
          phone: data.phone,
          address: { city: data.city, state: data.state },
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log(result);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Grid container display={"flex"} justifyContent={"center"} height={"100vh"}>
      <Grid
        container
        gap={1.1}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        width={400}
        p={2}
        borderRadius={"40px"}
        m={"auto"}
        bgcolor={"#fff"}
      >
        <Typography variant="h4" mb={2} textAlign="center">
          Cadastre-se
        </Typography>
        <form onSubmit={handleSubmit(handleFetchData)}>
          <Grid display={"flex"} pb={1}>
            <TextField
              size="small"
              variant="filled"
              placeholder="Nome"
              type="string"
              {...register("name")}
            />
            <TextField
              size="small"
              variant="filled"
              placeholder="Username"
              type="string"
              sx={{ paddingLeft: 0.5 }}
              {...register("username")}
            />
          </Grid>
          <Grid display={"flex"} pb={1}>
            <TextField
              size="small"
              variant="filled"
              placeholder="Phone"
              type="number"
              {...register("phone")}
            />
            <TextField
              size="small"
              variant="filled"
              type="password"
              placeholder="Password"
              sx={{ paddingLeft: 0.5 }}
              {...register("password")}
            />
          </Grid>
          <TextField
            size="small"
            variant="filled"
            placeholder="Email"
            fullWidth
            type="email"
            {...register("email")}
          />
          <Typography py={0.4}> Endereço </Typography>
          <FormControl sx={{ display: "flex", flexDirection: "row" }}>
            <TextField
              size="small"
              variant="filled"
              placeholder="Cidade"
              sx={{ paddingRight: 1 }}
              {...register("city")}
            />
            <TextField
              size="small"
              variant="filled"
              placeholder="Estado"
              {...register("state")}
            />
          </FormControl>
          <Grid pt={1}>
            <Button
              variant="contained"
              fullWidth
              sx={{
                textTransform: "capitalize",
              }}
              type="submit"
            >
              Cadastrar
            </Button>
            <Typography
              variant="body1"
              pt={1}
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"center"}
            >
              Possui uma conta?
              <Link to={"/"} style={{ textDecoration: "none" }}>
                <Typography fontWeight={"bold"} color={"#000"} marginLeft={1}>
                  Entre
                </Typography>
              </Link>
            </Typography>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};

export default Cadastro;
