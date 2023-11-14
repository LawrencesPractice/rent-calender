import { useState, useEffect, useRef } from "react";


const ImageSlider = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(1);
    const sliderStyles = {
        height: '100%',
        position: 'relative',
        padding: '10px',
    }
    const slideStyles = {
        width: '100%',
        height: '100%',
        borderRadius: '10px',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundImage: `url(${slides[currentIndex].imageUrl})`,
    }
    const leftArrowStyles = {
        top: '50%',
        position: 'absolute',
        transform: 'translate(0, -50%)',
        left: '32px',
        fontSize: '45px',
        color: `#f5f4f5`,
        zIndex: '1',
        cursor: `pointer`,
    }
    const rightArrowStyles = {
        top: '50%',
        position: 'absolute',
        transform: 'translate(0, -50%)',
        right: '32px',
        fontSize: '45px',
        color: `#ffffff`,
        zIndex: '1',
        cursor: `pointer`,
    }
    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }
    const goToNext = () => {
        const isLastSlide = currentIndex === 0;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }
    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    }
    const dotContainerStyles = {
        display: 'flex',
        justifyContent: 'center',
    }
    const dotStyles = {
        margin: '5px',
        cursor: 'pointer',
        fontSize: '20px',
    }



    return (

        <div style={sliderStyles} onClick={goToPrevious}>
            <div style={leftArrowStyles}>
                ←
            </div>
            <div style={rightArrowStyles} onClick={goToNext}>
                →
            </div>
            <div style={slideStyles}></div>
            <div style={dotContainerStyles}>
                {slides.map((slide, slideIndex) => (
                    <div key={slideIndex} style={dotStyles} onClick={() => goToSlide(slideIndex)}> •  </div>
                ))
                }
            </div>
        </div>

    )
};

export default ImageSlider;