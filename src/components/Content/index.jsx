import "./style.scss";
import Tags from "../Tags";
import Stars from "../Stars";
import AccordionCollapse from "../AccordionCollapse";

function Content({ info }) {
  const [firstname, lastname] = info.host.name.split(" ");
  return (
    <div className="container">
      <div className="container details">
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
      </div>
      <div className="container collapse-advertise d-flex row">
        <div className="col-md-6">
          <AccordionCollapse
            title="Description"
            textArray={[info.description]}
          />
        </div>

        <div className="col-md-6">
          <AccordionCollapse title="Équipements" textArray={info.equipments} />
        </div>
      </div>
    </div>
  );
}

export default Content;
