import React, { useState, useRef } from 'react'
import Modal from './modal.component';
export default {
    component: Modal,
    title: 'Global Component/Modal',
};


const Template = args => {
    const [show, setShow] = useState(false);
    const buttonRef = useRef(null)

    return (
        <>
            <button>Do nothing</button>
            <p>
                These two buttons show how focus is returned to the element that trigged
                the opening of the modal. This is achieved by adding a ref to the
                element that triggers the modal, and then passing that same ref down as
                a prop to the Modal component
                <br />
                <br />
                Focus moves to the heading of the modal so that users with assitive
                technologies like screen readers can confirm where they are after
                clicking the link or button which opened the modal. Focus then moves to
                the close button as the next item in sequence.
                <br />
                <br />
                If opening the modal was a mistake (happens often when you cant see the
                layout or with ambiguously labelled links) this makes it easy to
                correct.
            </p>
            <button onClick={() => setShow(true)}>Show /
                Open modal
            </button>
            <Modal title="My Modal" onClose={() => setShow(false)} show={show}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis
                    condimentum augue a sagittis. Maecenas a dolor consequat, ultrices
                    risus a, cursus leo. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Vestibulum felis purus, molestie sed nibh a, molestie
                    efficitur enim. Pellentesque laoreet risus non congue hendrerit. Etiam
                    pellentesque faucibus ultrices. Suspendisse a neque vel nisi facilisis
                    accumsan.
                    <br />
                    <br />
                    Sed vitae euismod tellus. In quis sapien ultricies, rutrum elit non,
                    feugiat urna. Vestibulum luctus dignissim ante, sed lacinia orci
                    euismod non. Duis tempus id massa id facilisis. Morbi eu massa
                    faucibus, posuere sapien vel, varius felis. Maecenas facilisis nunc
                    quis arcu lobortis, eget condimentum enim placerat. Aliquam sit amet
                    nulla ullamcorper lorem feugiat euismod eget quis est. Vestibulum et
                    leo ac sapien dignissim tempus. Phasellus nec mattis lacus, tempus
                    volutpat nisl. Quisque tortor nunc, sodales eu faucibus id, lobortis a
                    mauris. Duis viverra eu nibh non molestie. Aliquam mollis enim at sem
                    iaculis, non gravida enim porttitor. Donec vestibulum arcu id massa
                    imperdiet, ac efficitur dui mollis.
                </p>

            </Modal>

        </>
    )
}
export const Default = Template.bind({});

Default.args = {


};

