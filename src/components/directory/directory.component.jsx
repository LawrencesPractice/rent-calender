import CategoryItem from "../category-item/category-item.component";
import './directory.styles.scss';
import ImageSlider from "../image-slider/image-slider";
import { useState, useEffect, useRef } from "react";
const containerStyles = {
    width: "500px",
    height: "280px",
    margin: "0 auto",
};

const Directory = ({ categories }) => {
    // const [contentWidth, setContentWidth] = useState(0)
    // console.log(contentWidth)
    const [dimensions, setDimensions] = useState({
        height: window.innerHeight,
        width: window.innerWidth
    })
    useEffect(() => {
        function handleResize() {
            setDimensions({
                height: window.innerHeight,
                width: window.innerWidth
            })
        }
        window.addEventListener('resize', handleResize)

    })

    // const accordionRef = useRef(null)
    // useEffect(() => {
    //     const currentAccordion = accordionRef.current
    //     setContentWidth(currentAccordion.clientWidth)
    //     console.log(contentWidth)
    // }, [accordionRef, contentWidth])

    return (
        <div className='categories-container' >

            {dimensions.width < 500 ? <div style={containerStyles}>
                <ImageSlider slides={categories} />
            </div> : categories.map((category) => (
                <CategoryItem key={category.id} category={category} />
            ))}

        </div>
    )
}

export default Directory;