import { useContext, useState } from 'react';

import ProductCard from '../../components/product-card/product-card.component';

import { ProductsContext } from '../../contexts/products.context';
import './shop.styles.scss';
const Shop = () => {
    const { products } = useContext(ProductsContext);
    console.log(products)
    return (<>

        <div className='products-container' aria-label='Product catalogue'>
            {products.map((product) => (
                < ProductCard key={product.id} product={product} />
            ))}
        </div>

    </>

    );
};

export default Shop;