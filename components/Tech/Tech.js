import { DiDatabase, DiJavascript } from "react-icons/di";
import { SiLinuxcontainers } from "react-icons/si";
import { Section, SectionDivider, SectionText, SectionTitle, SpanHighlight } from "../../styles/GlobalComponents";
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from "./TechStyles";

const Tech = () => (
  <Section nopadding id="tech">
    <SectionDivider divider />
    <SectionTitle>Tech Stack</SectionTitle>
    <SectionText>The main area of my expertise is front-end development, HTML, CSS, JS, Angular. I also dabble with VueJS and ReactJS.</SectionText>
    <SectionText>Having said that, I also have full-stack development experiences on medium to large applications.</SectionText>
    <List>
      <ListItem>
        <DiJavascript size="5rem" style={{ marginBottom: "1rem" }} />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            <SpanHighlight>Angular, Vue</SpanHighlight>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiDatabase size="5rem" style={{ marginBottom: "1rem" }} />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Built microservices with <br />
            <SpanHighlight>Java/Kotlin, PostgreDB</SpanHighlight>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiLinuxcontainers size="5rem" style={{ marginBottom: "1rem" }} />
        <ListContainer>
          <ListTitle>Infrastructure</ListTitle>
          <ListParagraph>
            Operation support with <br />
            <SpanHighlight>Docker, K8s</SpanHighlight>
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Tech;
