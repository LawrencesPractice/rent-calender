import React from 'react';
import SignUpForm from './sign-up-form.component';
export default {
    component: SignUpForm,
    title: 'Global Component/SignUpForm',
};


const Template = args => <SignUpForm {...args} />

export const Default = Template.bind({});

Default.args = {

};

