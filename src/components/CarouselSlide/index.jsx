import Carousel from 'react-bootstrap/Carousel';
import './style.scss'

import Data from "../../data/logements.json"

function CarouselSlide() {
  <Carousel>
     {Data.map((item) => {
      return (
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={item.pictures}
          alt={item.title}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item> 
      )
      })}
  </Carousel> 
}
export default CarouselSlide; 