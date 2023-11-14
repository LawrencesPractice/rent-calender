import React, { useState } from "react";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import "./home.css";
import Calender from "../../components/calender/calender";
import { Popover } from 'react-tiny-popover'

function Home() {

    const [color, setColor] = useState();
    const [display, setDisplay] = useState();
    const [data, setData] = useState('block');
    const [isPopoverOpen, setIsPopoverOpen] = useState();
    return (
        <>
            <Popover
                isOpen={isPopoverOpen}
                positions={['bottom', 'left']} // if you'd like, you can limit the positions
                padding={10} // adjust padding here!
                reposition={false} // prevents automatic readjustment of content position that keeps your popover content within its parent's bounds
                onClickOutside={() => setIsPopoverOpen(false)} // handle click events outside of the popover/target here!
                content={({ position, nudgedLeft, nudgedTop }) => ( // you can also provide a render function that injects some useful stuff!
                    <div style={{ backgroundColor: "lightblue" }}>
                        <div>Hi! I'm popover content. Here's my current position: {position}.</div>
                        <div>I'm {` ${nudgedLeft} `} pixels beyond my boundary horizontally!</div>
                        <div>I'm {` ${nudgedTop} `} pixels beyond my boundary vertically!</div>

                        <label for="cars">Choose a color theme for the form:</label>
                        <select name="cars" id="cars" onChange={(e) => { setColor(e.target.value) }}>
                            <option value="white" >Light theme</option>
                            <option value="grey" >Dark theme</option>
                            <option value="yellow">Bright theme</option>
                        </select>
                        <label for="cars">Choose a display format:</label>
                        <select name="cars" id="cars" onChange={(e) => { setDisplay(e.target.value) }}>
                            <option value="inline-block" >In a block</option>
                            <option value="grid" >Seperated </option>
                            <option value="none">Not displaying any input num/text fields</option>
                        </select>
                        <label for="cars">Display data</label>
                        <select name="cars" id="cars" onChange={(e) => { setData(e.target.value) }}>
                            <option value="none" >Do not show</option>
                            <option value="grid" >Show data </option>
                        </select>
                    </div>
                )
                }
            >
                <div onClick={() => setIsPopoverOpen(!isPopoverOpen)}>Click me to customize!</div>
            </Popover >

            <Calender color={color} display={display} data={data} />

        </>
    );
}

export default Home;