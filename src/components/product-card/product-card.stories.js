import React from 'react';
import ProductCard from './product-card.component';
import styled from "styled-components"

export default {
    component: ProductCard,
    title: 'Global Component/ProductCard',
};
const product =
{
    "id": 1,
    "name": "Brown Cowboy",
    "imageUrl": "https://i.ibb.co/QdJwgmp/brown-cowboy.png",
    "price": 35,
}
const ContentWrapper = styled.div`
    width: 300px;
    height: 10px
  `

const Template = args => {
    return (
        <ContentWrapper> <ProductCard product={product} {...args} /> </ContentWrapper>

    )
}

export const Default = Template.bind({});

Default.args = {

};

