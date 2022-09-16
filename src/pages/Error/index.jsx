import { Link } from "react-router-dom";
import "./style.scss";
import { Container } from "react-bootstrap";

function Error() {
  return (
    <Container className="d-flex page-not-found">
      <div className="error-page">
        <h1 className="title-error">404</h1>
        <h2 className="error-path">
          Oups! La page que vous demandez n'existe pas.
        </h2>
      </div>
      <Link className="back-home" to={`/`}>
        <p>Retourner sur la page d’accueil</p>
      </Link>
    </Container>
  );
}

export default Error;
