import React from "react";
import Login from "./pages/Auth/Login/Login";
import styled from "styled-components";
import { css } from "styled-components";
import { Container } from "./App.styles";
import Register from "./pages/Auth/Register/Register";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";

function App() {
  return (
    <Container>
      {/* <Navbar></Navbar> */}
      {/* <Login></Login> */}
      <Register></Register>
    </Container>
  );
}

export default App;
