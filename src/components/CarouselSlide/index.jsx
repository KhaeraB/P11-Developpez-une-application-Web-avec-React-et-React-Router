import React, { useState } from "react"
import "./style.scss"

function CarouselSlide({ images })
{
    const [currentImage, setCurrent] = useState(0)
    const allImages = images.length
    const prev = () => {
        setCurrent(currentImage === 0 ? allImages - 1 : currentImage - 1)
    }

    const next = () => {
        setCurrent(currentImage === allImages - 1 ? 0 : currentImage + 1)
    }

    // si juste 1 image / image affichage classique 
    if( allImages === 1)
    {
        return (<div className="carousel my-5" >
                    <img src={images[currentImage]} alt="Logement"/>
                </div>
        ) 
    }

    // par défaut : si plusieurs images
    return (
        <div className="carousel my-5" >

            <img src={images[currentImage]} alt="Logement"/>
            <p className="indexImage">{currentImage+1}/{allImages}</p>
            <button className="arrow-left" onClick={prev}></button>
            <button className="arrow-right" onClick={next}></button>
        
        </div>  
    )
}

export default CarouselSlide