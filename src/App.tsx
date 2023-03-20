import { Container } from "./App.styles";
import Navbar from "./components/Navbar/Navbar";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./store/store";
import { routerController } from "./store/store";

function App() {
  return (
    <>
      <Navbar router={router}></Navbar>

      <Container>
        <RouterProvider router={routerController} />
      </Container>
    </>
  );
}

export default App;
