import Card from "../Card";
import Data from "../../data/logements.json";
import './style.scss'

function Wrapper() {
  return (
    <section className="section-wrapper">
      <div className="row wrapper">
        {Data.map((product) => {
          return <Card item={product} key={product.id}></Card>;
        })}
      </div>
    </section>
  );
}

export default Wrapper;
