import React from 'react'
import Arrow from './arrow'

const Carousel = () => {
    const [currentIdx, setIdx] = useState(0)

    return (
        <div className="carousel-container">
            <Arrow 
                direction="left"
                clickFunction={ previousSlide }
                glyph="&#9664;"
            />
            <img src={currentIdx}/>
            <Arrow 
                direction="right"
                clickFunction={ nextSlide}
                glyph="&#9654;"
            />

        </div>
    )
}