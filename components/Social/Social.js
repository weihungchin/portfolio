import { AiFillLinkedin, AiFillMediumCircle, AiFillGithub } from "react-icons/ai";
import { SocialIcons } from "../Header/HeaderStyles";

const Social = () => (
  <>
    <SocialIcons href="https://www.linkedin.com/in/weihungchin">
      <AiFillLinkedin size="3rem" />
    </SocialIcons>
    <SocialIcons href="https://medium.com/@weihungchin">
      <AiFillMediumCircle size="3rem" />
    </SocialIcons>
    <SocialIcons href="https://github.com/weihungchin/">
      <AiFillGithub size="3rem" />
    </SocialIcons>
  </>
);

export default Social;
