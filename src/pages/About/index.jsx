import "./style.scss";
import { Container} from "react-bootstrap";
import AccordionText from "../../components/AccordionText";

function About() {
  return (
    <Container>
      <div>
        <div className="main-hero-about">
          <div className="about">
          </div>
        </div>
      </div>
      <AccordionText></AccordionText>
    </Container>
  );
}

export default About;
