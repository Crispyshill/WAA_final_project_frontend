import { useParams } from 'react-router-dom';
import axios from 'axios';
import Address from '../Address';
import { useEffect, useState } from 'react';
import Student from '../Student/Student';

export default function NewsDetails() {
    let { id } = useParams();
    let [newsState, setNewsState] = useState({
        title: 'default',
        body: 'default'
    });

    const getNewsById = async () => {
        try {
            const response = await axios.get("http://localhost:8080/news/" + id);
            console.log("Thing: " + JSON.stringify(response.data))
            setNewsState(response.data);
        }
        catch (error) {
            console.log(error);
        }

    }

    useEffect(() => { getNewsById() }, []);

    return (
        <div className="news-container">
            <h1>news Details</h1>
            <span>id: {id}</span>
            <span>title: {newsState.title}</span>
            <span>body: {newsState.body}</span>

        </div>
    );
}