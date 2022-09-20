import { Container } from "react-bootstrap";
import "./style.scss";
import Tags from "../Tags";
import Stars from "../Stars";
import Details from "../Details";

function Content({ info }) {
  const [firstname, lastname] = info.host.name.split(" ");
  return (
    <Container>
      <Container className="details">
        <div className="col col-md-10">
          <h1>{info.title}</h1>
          <h3>{info.location}</h3>
          <Tags tags={info?.tags} />
        </div>
        <div className="col col-md-2  host ">
            <div className="col-md-12 d-flex m-0">
            <div className="hostName col-md-6">
              <p>{firstname}</p>
              <p>{lastname}</p>
            </div>

            <div className="col-md-6 image">
              <img
                className=" hostThumbnail"
                src={info.host.picture}
                alt={info.host.name}
              />
            </div>
          </div>
          <Stars rating={info?.rating} />
        </div>
      </Container>
      <Details more={info} />
    </Container>
  );
}

export default Content;
