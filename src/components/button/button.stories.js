import React from 'react';
import Button from './button.component';
export default {
    component: Button,
    title: 'Global Component/Button',
};


const Template = args => <Button {...args} > Button</Button>;

export const Default = Template.bind({});

Default.args = {

    BUTTON_TYPE_CLASSES: 'google',
    type: 'Button',

};


export const Inverted = Template.bind({});

Inverted.args = {

    buttonType: 'inverted',
    type: 'Button',

};

export const GoogleButton = Template.bind({});

GoogleButton.args = {

    buttonType: 'google',
    type: 'button',

};

// export const Pinned = Template.bind({});
// Pinned.args = {
//     task: {
//         ...Default.args.task,
//         state: 'TASK_PINNED',
//     },
// };

// export const Archived = Template.bind({});
// Archived.args = {
//     task: {
//         ...Default.args.task,
//         state: 'TASK_ARCHIVED',
//     },
// };