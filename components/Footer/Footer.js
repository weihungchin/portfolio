import Social from "../Social/Social";
import {
  FooterText,
  FooterTextContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => (
  <FooterWrapper>
    <LinkList>
      <LinkColumn>
        <LinkTitle>Email</LinkTitle>
        <LinkItem href="mailto:whc1g10@gmail.com">whc1g10@gmail.com</LinkItem>
      </LinkColumn>
    </LinkList>
    <SocialContainer>
      <FooterTextContainer>
        <FooterText>© 2022 WeiHung,CHIN. All Rights Reserved.</FooterText>
      </FooterTextContainer>
      <SocialIconsContainer>
        <Social />
      </SocialIconsContainer>
    </SocialContainer>
  </FooterWrapper>
);

export default Footer;
