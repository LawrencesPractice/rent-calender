import React from 'react';
import NotificationBanner from './NotificationBanner';
export default {
    component: NotificationBanner,
    title: 'Global Component/NotificationBanner',
};



const Template = args => <NotificationBanner {...args} />

export const Default = Template.bind({});

Default.args = {
    text: "  Your submission was successful, thank you!"
};

