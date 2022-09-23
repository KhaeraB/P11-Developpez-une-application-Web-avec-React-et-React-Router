import "./style.scss";
import { ABOUT_CONTENTS } from "../../constants/about";
import AccordionCollapse from "../../components/AccordionCollapse";

function About() {
  return (
    <div className="container">
      <div>
        <div className="main-hero-about">
          <div className="about">
          </div>
        </div>
      </div>
      <div className="container-collapse">
        {ABOUT_CONTENTS.map(({ title, text }) => (
          <AccordionCollapse key={`about-${title}`} title={title} textArray={[text]} />
        ))}
      </div>
    </div>
  );
}

export default About;
