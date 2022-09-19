import { Container, Accordion } from "react-bootstrap";

function Details({ more }) {
  return (
    <Container className="d-flex row accordeon-ad">
      <Accordion key={more.description} className="col-md-6 col-sm-12">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Description</Accordion.Header>
          <Accordion.Body>{more.description}</Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Accordion className=" col-md-6 col-sm-12">
        <Accordion.Item eventKey="1">
          <Accordion.Header>Équipements</Accordion.Header>
          <Accordion.Body>
            <ul>
              {more.equipments.map((equipment) => {
                return (
                  <li className="item" key={equipment}>
                    {equipment}
                  </li>
                );
              })}
            </ul>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}
export default Details;
