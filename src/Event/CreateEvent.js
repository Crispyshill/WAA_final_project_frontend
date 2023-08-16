import { useState } from 'react';
import axios from 'axios';

export default function CreateEvent({ addEvent }) {
    let [eventState, setEventState] = useState({
        id: 'default',
        name: 'default',
        date: 'default',
        category: 'default',
        description: 'default'
    })
    const onChanged = (e) => {
        setEventState({ ...eventState, [e.target.name]: e.target.value });
    }

    const CreateEvent = async () => {
        try {

            axios.post("http://localhost:8080/event", eventState);
            setEventState({
                id: 'default',
                name: 'default',
                date: 'default',
                category: 'default',
                description: 'default'
            });
            addEvent(eventState);
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            id: <input
                type='text'
                value={eventState.id}
                onChange={onChanged}
                name='id'
            />
            name: <input
                type='text'
                value={eventState.name}
                onChange={onChanged}
                name='name'
            />
            date: <input
                type='text'
                value={eventState.date}
                onChange={onChanged}
                name='date'
            />
            description: <input
                type='text'
                value={eventState.description}
                onChange={onChanged}
                name='description'
            />
            category: <input
                type='text'
                value={eventState.category}
                onChange={onChanged}
                name='category'
            />


            <button
                type='submit'
                onClick={CreateEvent}
            >
                Create Event</button>
        </div>
    );
}