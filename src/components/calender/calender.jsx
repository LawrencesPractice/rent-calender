import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState, useEffect } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { collection, addDoc, getDocs } from "firebase/firestore";

import { db } from "../../utils/firebase/firebase.utils";
import * as S from './calender.styles'


const locales = {
    "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});


const events = [
    {
        title: "Big Meeting",
        allDay: true,
        start: new Date(2023, 1, 1),
        end: new Date(2023, 1, 2),
    },
    {
        title: "Vacation",
        start: new Date(2021, 6, 7),
        end: new Date(2021, 6, 10),
    },
    {
        title: "Conference",
        start: new Date(2021, 6, 20),
        end: new Date(2021, 6, 23),
    },
];

function Calender({ color, display, data }) {
    const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
    const [allEvents, setAllEvents] = useState();
    const [newTenant, setNewTenant] = useState({ firstName: "", lastName: "", passcode: "" });
    const [newAmount, setNewAmount] = useState();
    async function handleAddEvent() {

        for (let i = 0; i < allEvents.length; i++) {

            const d1 = new Date(allEvents[i].start);
            const d2 = new Date(newEvent.start);
            const d3 = new Date(allEvents[i].end);
            const d4 = new Date(newEvent.end);
            if (
                ((d1 <= d2) && (d2 <= d3)) || ((d1 <= d4) &&
                    (d4 <= d3))
            ) {
                alert("CLASH");
                break;
            }

        }
        // newEvent.rent = newAmount

        setAllEvents([...allEvents, newEvent]);
        console.log("this befire database", ...allEvents)
        try {
            const docRef = await addDoc(collection(db, "events"), {
                newEvent,

            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }

    }

    const fetchPost = async () => {

        await getDocs(collection(db, "events"))
            .then((querySnapshot) => {
                console.log()
                const newData = querySnapshot.docs
                    .map((doc) => ({ ...doc.data().newEvent }));
                console.log("This is origianl", newData)
                const flatten = [].concat.apply([], newData);
                console.log("flatten", flatten)
                // console.log("This is original flat", newData.reduce(function (flat, toFlatten) {
                //     return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
                // }))

                // const eventsData = flatten.map(({ start, end, title }) => [{ "title": title }, { "start": Date(start.seconds).toLocaleString('en-US', { timeZone: 'UTC' }) }, { "end": Date(end.seconds).toLocaleString('en-US', { timeZone: 'UTC' }) }])
                // console.log("Mapped events", (flatten.map((event) => event.start, event.end)))

                // const newDataE = flatten.map((event) => (event.start, event.end, event.title)
                //  const newDataE = flatten.map((event) => (Object.assign({}, ...newData));
                console.log("Default events", events)

                // console.log("Assigned events", (Object.assign(events, newData)))
                // console.log("Assigned events 1", (Object.assign(0, ...newData)))


                // //Find index of specific object using findIndex method.    
                // const objIndex = flatten.findIndex((obj => obj. == 0));

                // //Log object to Console.
                // console.log("Before update: ", flatten[objIndex])

                // //Update object's name property.
                // flatten[objIndex].name = "Laila"

                // //Log object to console again.
                // console.log("After update: ", flatten[objIndex])

                // console.log(Date.prototype.toDateString(flatten[1].start.seconds).toDateString('en-US', { timeZone: 'UTC' }))

                for (let i = 0; i < flatten.length; i++) {

                    flatten[i].start = Date(flatten[i].start.seconds).toLocaleString('en-US', { timeZone: 'UTC' })
                    flatten[i].end = Date(flatten[i].end.seconds).toLocaleString('en-US', { timeZone: 'UTC' })
                }
                console.log("After events", flatten)

                setAllEvents(flatten);

                // console.log("After fetching", allEvents.map(({ title, start, end }=> )



                // console.log(newData.map((todo) => todo.todo.start))
                // console.log(newData.map((todo) => todo.title))

            })

    }
    useEffect(() => {
        fetchPost();
    }, []);
    return (
        <S.CalenderContainer color={color} >


            <h1>{newTenant.firstName} Rent Calendar</h1>
            <h2>Add New Tenant</h2>

            <S.Input display={display} type="text"
                placeholder="Add Name of tenant"
                value={newTenant.title}
                onChange={(e) => setNewTenant({ ...newTenant, firstName: e.target.value })} />
            <h2>Add New Period paid</h2>
            {/* {allEvents?.type} */}


            <div className="datepicker">
                <S.Input display={display} type="text" placeholder="Add Title" style={{ width: "20%", marginRight: "10px" }} value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
                <S.Input display={display} type="number" placeholder="Add Amount paid" style={{ width: "20%", marginRight: "10px" }}
                    value={newAmount} onChange={(e) => setNewAmount(e.target.value)} />
                <DatePicker placeholderText="Start Date" style={{ marginRight: "10px" }} selected={newEvent.start} onChange={(start) => setNewEvent({ ...newEvent, start })} />
                <DatePicker placeholderText="End Date" selected={newEvent.end} onChange={(end) => setNewEvent({ ...newEvent, end })} />
                <button stlye={{ marginTop: "10px" }} onClick={handleAddEvent}>
                    Add Event
                </button>

            </div>
            <Calendar localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end" style={{ height: 500, margin: "50px" }} />
            {
                newEvent
                &&
                <ul>
                    <h2> Successfully added!</h2>
                    <li>{newEvent.title}</li>
                    <li> Amount paid: {newAmount}</li>
                </ul>
            }
            <S.data data={data}>
                <h2>Events data</h2>
                This is a type of :
                {typeof (allEvents)}

                {/* {allEvents?.map((event) => (<p>{JSON.stringify(event?.title)}</p>))} */}
                {/* {allEvents?.map(({ title, start, end }) => <p >{title}{start} {end}</p>)} */}
                <hr />
                The print out of event default data is: <br />
                {JSON.stringify(events)}
                {/* {events?.map(({ event }) => <p > {event?.title}{event?.start} {event?.end}</p>)} */}

                <hr />
                The print out of fetched database data is: <br />

                {/* {allEvents?.map(({ event }) => <p > {event?.title}{Date(event?.start.seconds).toLocaleString('en-GB', { timeZone: 'UTC' })} {event?.end}</p>)} */}

                {JSON.stringify(allEvents)}
            </S.data>
        </S.CalenderContainer >
    );
}

export default Calender;