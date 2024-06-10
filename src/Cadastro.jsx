import {
  Button,
  FormControl,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Cadastro = () => {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  const handleFetchData = async () => {
    try {
      const response = await fetch(
        "https://node-notification.azurewebsites.net/security/register",
        {
          method: "POST",
          mode: "cors",
          body: JSON.stringify({
            name: "string",
            username: "string",
            email: "string",
            password: "string",
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
        <Grid display={"flex"}>
          <TextField
            size="small"
            variant="filled"
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            size="small"
            variant="filled"
            placeholder="Username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            sx={{ paddingLeft: 0.5 }}
          />
        </Grid>
        <Grid display={"flex"}>
          <TextField
            size="small"
            variant="filled"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <TextField
            size="small"
            variant="filled"
            type="password"
            placeholder="Password"
            value={password}
            sx={{ paddingLeft: 0.5 }}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Grid>

        <TextField
          size="small"
          variant="filled"
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Typography py={0.4}> Endereço </Typography>

        <FormControl sx={{ display: "flex", flexDirection: "row" }}>
          <TextField
            size="small"
            variant="filled"
            placeholder="Cidade"
            sx={{ paddingRight: 2 }}
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <TextField
            size="small"
            variant="filled"
            placeholder="Estado"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
        </FormControl>

        <FormControl sx={{ paddingTop: 1 }}>
          <Button
            variant="contained"
            sx={{ textTransform: "capitalize" }}
            onClick={handleFetchData}
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
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default Cadastro;
