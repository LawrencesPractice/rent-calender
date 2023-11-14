import './category-item.styles.scss'
import { CSSTransition } from "react-transition-group";

const CategoryItem = ({ category }) => {
    const { imageUrl, title, id } = category;
    return (
        <CSSTransition
            in="Hello"
            unmountOnExit
            timeout={{ enter: 100, exit: 600 }}
        >
            <div key={id} className='category-container'>
                <div className='background-image' style={{ backgroundImage: `url(${imageUrl})` }} />
                <div className='category-body-container'>
                    <h2>{title}</h2>
                    <p>Shop Now</p>
                </div>
            </div>
        </CSSTransition>

    )
}

export default CategoryItem;