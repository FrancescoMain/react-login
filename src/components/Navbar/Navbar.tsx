// components/Navbar.js

import { Nav, UnList, Link } from "./styles";
import { Props } from "./type";

const Navbar = ({ router }: Props) => {
  return (
    <Nav>
      <UnList className="container">
        {router.map(
          (route, index) =>
            route.visible && (
              <li key={index}>
                <Link href={route.path}>{route.name}</Link>
              </li>
            )
        )}
      </UnList>
    </Nav>
  );
};

export default Navbar;
