// components/Navbar.js

import { Nav, UnList, Link } from "./styles";
import { ReactNode } from "react";

interface Props {
  router: {
    path: string;
    name: string;
  }[];
}

const Navbar = ({ router }: Props) => {
  return (
    <Nav>
      <UnList className="container">
        {router.map((route, index) => (
          <li key={index}>
            <Link href={route.path}>{route.name}</Link>
          </li>
        ))}
      </UnList>
    </Nav>
  );
};

export default Navbar;
