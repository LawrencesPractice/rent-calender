import React from 'react';
import CartIcon from './cart-icon.component';
export default {
    component: CartIcon,
    title: 'Global Component/Cart Icon',
};


const Template = args => <CartIcon {...args} />

export const Default = Template.bind({});

Default.args = {
};

