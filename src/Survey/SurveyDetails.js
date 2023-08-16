import { useParams } from 'react-router-dom';
import axios from 'axios';
import Address from '../Address';
import { useEffect, useState } from 'react';
import Student from '../Student/Student';
import Responses from './Responses';

export default function SurveyDetails() {
    let { id } = useParams();
    let [surveyState, setSurveyState] = useState({
        name: 'default',
        description: 'default',
        responses: []
    });

    const getSurveyById = async () => {
        try {
            const response = await axios.get("http://localhost:8080/survey/" + id);
            console.log("Thing: " + JSON.stringify(response.data))
            setSurveyState(response.data);
        }
        catch (error) {
            console.log(error);
        }

    }

    useEffect(() => { getSurveyById() }, []);

    return (
        <div className="news-container">
            <h1>news Details</h1>
            <span>id: {id}</span>
            <span>name: {surveyState.name}</span>
            <span>description: {surveyState.description}</span>
            <Responses responses={surveyState.responses} />


        </div>
    );
}