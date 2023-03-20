// components/Navbar.js

import { Nav, UnList, Link } from "./styles";

const Navbar = () => {
  return (
    <Nav>
      <UnList className="container">
        <li>
          <Link href="/">Login</Link>
        </li>
        <li>
          <Link href="/register">Register</Link>
        </li>
      </UnList>
    </Nav>
  );
};

export default Navbar;
