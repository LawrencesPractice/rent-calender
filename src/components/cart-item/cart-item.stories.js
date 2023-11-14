import React from 'react';
import CartItem from './cart-item.component';
import styled from "styled-components"

export default {
    component: CartItem,
    title: 'Global Component/CartItem',
};
const product =
{
    "name": "Brown Cowboy",
    "imageUrl": "https://i.ibb.co/QdJwgmp/brown-cowboy.png",
    "price": 35,
    "quantity": 2,
}

const ContentWrapper = styled.div`
    width: 300px;
    height: 10px
  `
const Template = args => {
    return (
        <ContentWrapper>

            <CartItem cartItem={product} {...args} />

        </ContentWrapper>

    )
}

export const Default = Template.bind({});

Default.args = {

};

