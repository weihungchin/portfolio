import { Container, Div1, Div2, Div3, NavLink, Span, Anchor } from "./HeaderStyles";
import Link from "next/link";
import { FaLaptopCode } from "react-icons/fa";
import Social from "../Social/Social";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <Anchor>
          <FaLaptopCode size="3rem" />
          <Span>WeiHung</Span>
        </Anchor>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#tech">
          <NavLink>Tech</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <Social />
    </Div3>
  </Container>
);

export default Header;
