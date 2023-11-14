import React from 'react';
import Footer from './footer';
import { footerFallbackData } from './footer.fallbackdata'

export default {
    component: Footer,
    title: 'Global Component/Footer',
};


const Template = args => <Footer {...args} > Footer</Footer>;

const Default = Template.bind({});

export const GlobalFooter = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
GlobalFooter.args = {
    ...footerFallbackData,
}



