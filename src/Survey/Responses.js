import { useState } from 'react';
import Student from '../Student/Student'
export default function Responses(props) {

    const listResponses = () => {
        return (
            props.surveyResponses.map((resp) => {
                return <div>
                    <span>id: {resp.id}</span>
                    <span>response: {resp.response}</span>
                    <Student student={resp.student }/>
                </div>
            })
        )
    }
    return (
        <div>
            <span>Responses: {listResponses}</span>
        </div>
    )


}