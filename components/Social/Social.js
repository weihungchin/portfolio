import { AiFillLinkedin, AiFillMediumCircle, AiFillGithub } from "react-icons/ai";
import { SocialIcons } from "../Header/HeaderStyles";

const Social = () => (
  <>
    <SocialIcons href="https://www.linkedin.com/in/weihungchin" target= "_blank" aria-label = "LinkedIn">
      <AiFillLinkedin size="3rem" />
    </SocialIcons>
    <SocialIcons href="https://medium.com/@weihungchin" target= "_blank" aria-label = "Medium.com">
      <AiFillMediumCircle size="3rem" />
    </SocialIcons>
    <SocialIcons href="https://github.com/weihungchin/" target= "_blank" aria-label = "Github">
      <AiFillGithub size="3rem" />
    </SocialIcons>
  </>
);

export default Social;
