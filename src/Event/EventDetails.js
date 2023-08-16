import { useParams } from 'react-router-dom';
import axios from 'axios';
import Address from '../Address';
import { useEffect, useState } from 'react';
import Student from '../Student/Student';

export default function EventDetails() {
    let { id } = useParams();
    let [eventState, setEventState] = useState({
        name: 'default',
        category: 'default',
        date: 'default',
        description: 'default',
        students: []
    });

    const getEventById = async () => {
        try {
            const response = await axios.get("http://localhost:8080/event/" + id);
            console.log("Thing: " + JSON.stringify(response.data))
            setEventState(response.data);
        }
        catch (error) {
            console.log(error);
        }

    }

    useEffect(() => { getEventById() }, []);

    return (
        <div className="event-container">
            <h1>event Details</h1>
            <span>id: {id}</span>
            <span>name: {eventState.name}</span>
            <span>date: {eventState.date}</span>
            <span>category: {eventState.category}</span>
            <span>description: {eventState.description}</span>


        </div>
    );
}