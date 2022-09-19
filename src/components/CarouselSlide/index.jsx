import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './style.scss'

function CarouselSlide({images}) {
  /* Crée un Hook d'état */
  const allImages = images.length; 
  
  return(
      <Carousel >
        
         {
              images.map((image, index) => {
                
                  return(
                    <Carousel.Item>
                      <img src={image} alt="Logement"/>
                      <Carousel.Caption>
                        <p>{index+1} / {allImages}</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                  )
                
              })
          }
          
        </Carousel>
  );
  
}
export default CarouselSlide; 