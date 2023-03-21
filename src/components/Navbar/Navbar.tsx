// components/Navbar.js

import { Nav, UnList, Link } from "./styles";
import { Props } from "./type";
import Button from "@mui/material/Button";

const Navbar = ({ router }: Props) => {
  return (
    <Nav>
      <UnList className="container">
        {router.map(
          (route, index) =>
            route.visible && (
              <li key={index}>
                <Button href={route.path} variant="contained">
                  {route.name}
                </Button>
              </li>
            )
        )}
      </UnList>
    </Nav>
  );
};

export default Navbar;
