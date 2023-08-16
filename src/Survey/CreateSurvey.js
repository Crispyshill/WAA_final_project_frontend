import { useState } from 'react';
import axios from 'axios';

export default function CreateSurvey({ addSurvey }) {
    let [surveyState, setSurveyState] = useState({
        id: 'default',
        name: 'default',
        description: 'default'
    })
    const onChanged = (e) => {
        setSurveyState({ ...surveyState, [e.target.name]: e.target.value });
    }

    const CreateSurvey = async () => {
        try {

            axios.post("http://localhost:8080/survey", surveyState);
            setSurveyState({
                id: 'default',
                name: 'default',
                description: 'default'
            });
            addSurvey(surveyState);
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            id: <input
                type='text'
                value={surveyState.id}
                onChange={onChanged}
                name='id'
            />
            name: <input
                type='text'
                value={surveyState.name}
                onChange={onChanged}
                name='name'
            />
            description: <input
                type='text'
                value={surveyState.description}
                onChange={onChanged}
                name='description'
            />


            <button
                type='submit'
                onClick={CreateSurvey}
            >
                Create survey</button>
        </div>
    );
}