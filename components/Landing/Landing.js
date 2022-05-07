import { Section, SectionTitle, SectionText } from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection, Hello, Intro } from "./LandingStyles";

const Landing = () => (
  <Section nopadding row>
    <LeftSection>
      <SectionTitle main center>
        <Hello>Hello</Hello>
      </SectionTitle>
      <Intro>I&apos;m WeiHung, a full-stack web developer</Intro>
      <Button onClick={() => (window.location = "mailto:whc1g10@gmail.com")}>Contact Me!</Button>
    </LeftSection>
  </Section>
);

export default Landing;
