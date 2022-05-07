import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span, Anchor } from "./HeaderStyles";
import Link from "next/link";
import { DiCssdeck } from "react-icons/di";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <Anchor>
          <DiCssdeck size="3rem" /> 
          <Span>Portfolio</Span>
        </Anchor>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#skills">
          <NavLink>Skills</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com">
        <AiFillGithub size = "3rem" />
      </SocialIcons>
      <SocialIcons href="https://linkedin.com">
        <AiFillLinkedin size = "3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
