import "./style.scss";
import { Container, Accordion } from "react-bootstrap";

function About() {
  return (
    <Container>
      <div>
        <div className="main-hero-about">
          <div className="about">
          </div>
        </div>
      </div>
      <div className="about-item">
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Fiabilité</Accordion.Header>
          <Accordion.Body>
          Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, 
          et toutes les informations sont régulièrement vérifiées  par nos équipes.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Respect</Accordion.Header>
          <Accordion.Body>
          La bienveillance fait partie des valeurs fondatrices de Kasa. 
          Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Service</Accordion.Header>
          <Accordion.Body>
          Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. 
          N'hésitez pas à nous contacter si vous avez la moindre question.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Sécurité</Accordion.Header>
          <Accordion.Body>
          La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, 
          chaque logement correspond aux critères de sécurité établis par nos services.
          En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de 
          vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur 
          la sécurité domestique pour nos hôtes.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      </div>
    </Container>
  );
}

export default About;
