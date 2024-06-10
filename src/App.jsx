import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login.jsx";
import Cadastro from "./Cadastro.jsx";
import { Box } from "@mui/material";
const App = () => {
  return (
    <Box bgcolor={"#ccc"}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="cadastro" element={<Cadastro />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
};

export default App;
