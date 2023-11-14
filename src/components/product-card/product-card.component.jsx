import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';
import ReactTooltip from 'react-tooltip';

import Button from '../button/button.component';

import './product-card.styles.scss';
const ProductCard = ({ product }, Notify) => {
    const { name, price, imageUrl } = product;
    const { addItemToCart } = useContext(CartContext);

    const addProductToCart = () => addItemToCart(product);
    const handleOnClickDefault = () => {
        Notify = false;
        addProductToCart()
    }
    return (
        <div className='product-card-container'>


            <ReactTooltip place="top" type="dark" effect="float" />
            <img data-tip={`Name: ${name} ,
            Price: ${price}`} src={imageUrl} alt={`${name}`} />
            <div className='footer' >
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <Button buttonType='inverted' onClick={handleOnClickDefault}>
                Add to card
            </Button>
        </div>
    );
};

export default ProductCard;