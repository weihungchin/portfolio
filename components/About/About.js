import { LowHighlight, SpanHighlight, Section, SectionDivider, SectionSubText, SectionText, SectionTitle, HighlightLink } from "../../styles/GlobalComponents";

const About = () => (
  <Section nopadding id="about">
    <SectionDivider divider colorAlt />
    <SectionTitle>About Me</SectionTitle>
    <SectionText>
      I started out as a frontend developer around 7 years ago, working mostly with AngularJS and the Salesforce platform. Later on, I moved on to focussing on{" "}
      <LowHighlight>Angular</LowHighlight> with <LowHighlight>RxJS</LowHighlight> for about 2 years and so.
    </SectionText>

    <SectionText>
      I built responsive web apps (mostly internal ones) for the insurance industry. I&apos;ve helped the team to establish architecture styleguide
      and best practices when starting a project from scratch.
      <br />
    </SectionText>

    <SectionText>
      In the past 3 years, I began to develop full-stack applications, with <LowHighlight> Java/Kotlin Spring Boot</LowHighlight> for the microservice
      backend, as well as <LowHighlight>Vue 2/3</LowHighlight> or <LowHighlight>Angular 11+</LowHighlight>. I also have some experience in container
      technology (Docker, Kubernetes) in the operation side.
    </SectionText>

    <SectionSubText>
      If you like to know more, feel free to connect with me on{" "}
      <HighlightLink href="https://www.linkedin.com/in/weihungchin" target="_blank">
        LinkedIn
      </HighlightLink>
      .
    </SectionSubText>
  </Section>
);

export default About;
