import React, { useState } from 'react'
import Fader from './fader';
export default {
    component: Fader,
    title: 'Global Component/Fader',
};


const Template = args => {
    const [show, setShow] = useState(false);
    const [notification, setNotification] = useState({ title: "", body: "" });

    console.log(show, notification);

    const faderFucntion = () => {
        setShow(true);
        setNotification({
            title: "payload.notification.title",
            body: "payload.notification.body",
        });
        // console.log(payload);
    }

    return (
        <>
            <div >

                <Fader text="Hello React" onclick={faderFucntion}></Fader>

            </div>

        </>
    )
}
export const Default = Template.bind({});

