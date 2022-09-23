import React, { useState } from "react"
import "./style.scss"

function CarouselSlide({ images })
{
    const [currentImage, setCurrent] = useState(0)
    const allimages = images.length
    console.log(images.length)
    const prev = () => {
        setCurrent(currentImage === 0 ? allimages - 1 : currentImage - 1)
    }

    const next = () => {
        setCurrent(currentImage === allimages - 1 ? 0 : currentImage + 1)
    }

    // si il n'y à que 1 image = pas de fleches
    if( allimages === 1)
    {
        return (<div className="carousel my-5" >
                    <img src={images[currentImage]} alt="Logement"/>
                </div>
        ) 
    }

    // par défaut si j'ai plusieurs les images
    return (
        <div className="carousel my-5" >

            <img src={images[currentImage]} alt="Logement"/>
            <p className="indexImage">{currentImage+1}/{allimages}</p>
            <button className="arrow-left" onClick={prev}></button>
            <button className="arrow-right" onClick={next}></button>
        
        </div>  
    )
}

export default CarouselSlide