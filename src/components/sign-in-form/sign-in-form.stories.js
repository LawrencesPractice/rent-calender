import React from 'react';
import SignInForm from './sign-in-form.component';
export default {
    component: SignInForm,
    title: 'Global Component/SignInForm',
};


const Template = args => <SignInForm {...args} />

export const Default = Template.bind({});

Default.args = {

};

