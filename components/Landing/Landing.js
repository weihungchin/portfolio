import { Section, SectionTitle } from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection, Hello, Intro, SlideUpAnimation, StarryBackground, ShootingStar, DescriptionLink } from "./LandingStyles";

const Landing = () => (
  <Section nopadding row style={{ height: "100vh" }}>
    <StarryBackground />
    <ShootingStar />
    <LeftSection>
      <SectionTitle main center>
        <Hello>Hello</Hello>
      </SectionTitle>
      <SlideUpAnimation duration="0.4s" delay="1s">
        <Intro>I&apos;m WeiHung, a full-stack web developer</Intro>
      </SlideUpAnimation>
      <SlideUpAnimation duration="1s" profile="ease-in" delay="1s">
        <Button onClick={() => (window.location = "mailto:admin@weihung.tech")}>Get in touch!</Button>
        <DescriptionLink href="https://tinyurl.com/2p82a2mf" target="_blank" aria-label="resume">Or view my full resume </DescriptionLink>
      </SlideUpAnimation>
    </LeftSection>
  </Section>
);

export default Landing;
