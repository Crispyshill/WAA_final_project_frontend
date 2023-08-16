import { useEffect, useState } from 'react';
import axios from 'axios';
import Survey from './Survey';
export default function SurveyPage() {
    let [surveyState, setSurveyState] = useState({
        surveys: []
    })


    const getSurveys = async () => {
        try {
            const response = await axios.get('http://localhost:8080/survey');
            console.log(response.data);

            // Clear existing reviews and add new ones
            setSurveyState({
                surveys: response.data
            });
        } catch (error) {
            console.error('Axios Error:', error);
        }
    };

    useEffect(() => {
        getSurveys();
    }, []);



    function listSurveys(surveys) {
        return surveys.map((survey) => {
            return (
                <div key={survey.id} className="review-container">
                    <Survey survey={survey} />
                </div>
            )
        });
    }



    return (
        <div>
            <h1>Survey Portal</h1>
            {listSurveys(surveyState.surveys)}
        </div>
    );
}