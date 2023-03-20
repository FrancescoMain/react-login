import React from "react";
import Login from "./pages/Auth/Login/Login";
import styled from "styled-components";
import { css } from "styled-components";
import { Container } from "./App.styles";
import Register from "./pages/Auth/Register/Register";
import Navbar from "./components/Navbar/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
]);

function App() {
  return (
    <>
      <Navbar></Navbar>

      <Container>
        <RouterProvider router={router} />
      </Container>
    </>
  );
}

export default App;
