import React from 'react';
import Pagination from './pagination';
export default {
    component: Pagination,
    title: 'Global Component/Pagination',
};



const Template = args => <Pagination {...args} />

export const Default = Template.bind({});
const handleMoreProducts = () => {
    return ''
}

Default.args = {
    pageSize: 5,
    currentPageIndex: 1,
    totalResults: 27,
    handleMoreProducts,
    isLoading: false,
};


export const LastPages = Template.bind({})
LastPages.args = {
    testId: 'Pagination',
    pageSize: 10,
    currentPageIndex: 9,
    totalResults: 100,
    handleMoreProducts,
    isLoading: false,
}

export const Page4Onwards = Template.bind({})
Page4Onwards.args = {
    testId: 'Pagination',
    pageSize: 5,
    currentPageIndex: 4,
    totalResults: 100,
    handleMoreProducts,
    isLoading: false,
}

export const MiddlePages = Template.bind({})
MiddlePages.args = {
    testId: 'Pagination',
    pageSize: 5,
    currentPageIndex: 6,
    totalResults: 100,
    handleMoreProducts,
    isLoading: false,
}
