import React from "react";
import TextField from "@mui/material/TextField";
import { Button, FormControl, Typography, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const handleFetchData = async () => {
    try {
      const response = await fetch(
        "https://node-notification.azurewebsites.net/security/register",
        {
          method: "POST",
          mode: "cors",
          body: JSON.stringify({
            username: "string",
            password: "string",
          }),
        }
      );
      console.log(response);
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
        <TextField
          variant="filled"
          placeholder="Username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          sx={{
            display: "flex",
            px: 3,
          }}
        ></TextField>
        <TextField
          variant="filled"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{
            display: "flex",
            px: 3,
          }}
        ></TextField>
        <FormControl
          sx={{ paddingTop: 2 }}
          display={"flex"}
          justifyContent={"center"}
        >
          <Button
            variant="contained"
            sx={{ marginRight: 3, marginLeft: 3, textTransform: "capitalize" }}
            onChange={handleFetchData}
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
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default Login;
