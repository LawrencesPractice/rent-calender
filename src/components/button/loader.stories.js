import React from 'react';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

export default {
    component: ClimbingBoxLoader,
    title: 'Global Component/Loader',
};


const Template = args => <ClimbingBoxLoader {...args} > Button</ClimbingBoxLoader>;

export const Default = Template.bind({});

Default.args = {

    color: 'black',
    type: 'ClimbBoxLoader',

};

