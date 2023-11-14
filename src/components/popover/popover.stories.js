import React, { useState } from 'react';
import Popover from './popover';
export default {
    component: Popover,
    title: 'Global Component/Popover',
};

const Template = args => {
    const [isPopoverOpen, setIsPopoverOpen] = useState(false)

    return (
        <>
            <button
                onClick={() => {
                    setIsPopoverOpen(true)
                }}
                as="button"
            >
                {' '}
                Open popover
            </button>
            <Popover
                {...args}
                isPopoverVisible={isPopoverOpen}
                closeButtonCallback={() => {
                    setIsPopoverOpen(false)
                }}
            >
                This is a popover bottom
            </Popover>
        </>
    )
}

export const PopoverBottom = Template.bind({})

PopoverBottom.args = {
    hasCloseButton: true,
    headerText: 'Popover Header',
    variant: 'bottom',
}
