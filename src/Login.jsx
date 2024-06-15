import React from "react";
import TextField from "@mui/material/TextField";
import { Button, Typography, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleFetchData = async (data) => {
    const BASE_URL = "https://node-notification.azurewebsites.net";
    try {
      const response = await fetch(`${BASE_URL}/security/login`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        mode: "cors",
        body: JSON.stringify({
          username: data.username,
          password: data.password,
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
        borderRadius={"30px"}
        m={"auto"}
        bgcolor={"#fff"}
      >
        <Typography variant="h4" mb={2} textAlign="center">
          Login
        </Typography>
        <form onSubmit={handleSubmit(handleFetchData)}>
          <TextField
            variant="filled"
            className={errors.username && "input-error"}
            placeholder="Username"
            type="string"
            {...register("username", { minLength: 2 })}
            sx={{
              display: "flex",
              px: 3,
              pb: 1,
            }}
          />
          {errors.username && (
            <Typography variant="body2" fontSize={14} ml={3} color={"red"}>
              Digite um username válido
            </Typography>
          )}
          <TextField
            variant="filled"
            placeholder="Password"
            type="password"
            className={errors.password && "input-error"}
            {...register("password", { minLength: 3 })}
            sx={{
              display: "flex",
              px: 3,
            }}
          />
          {errors.password && (
            <Typography variant="body2" fontSize={14} ml={3} color={"red"}>
              Digite uma senha válida
            </Typography>
          )}
          <Grid pt={1} px={3}>
            <Button
              variant="contained"
              fullWidth
              sx={{
                textTransform: "capitalize",
              }}
              type="submit"
            >
              Login
            </Button>

            <Typography
              variant="body1"
              mt={1}
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"center"}
            >
              Não possui uma conta?
              <Link to={"/cadastro"} style={{ textDecoration: "none" }}>
                <Typography fontWeight={"bold"} color={"#000"} marginLeft={0.7}>
                  Cadastre-se
                </Typography>
              </Link>
            </Typography>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};

export default Login;
