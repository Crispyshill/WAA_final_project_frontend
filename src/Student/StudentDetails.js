import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function StudentDetails() {
    let { id } = useParams();
    let [studentState, setStudentState] = useState({
        id: 'default',
        email: 'default',
        graduationYear: 'default',
        firstName: 'default', 
        lastName: 'default',
        industry: 'default'
    });

    const getStudentById = async () => {
        try {
            const response = await axios.get("http://localhost:8080/student/" + id );
            setStudentState(response.data);
        }
        catch (error) {
            console.log(error);
        }
        
    }

    useEffect(() => { getStudentById() }, []);

    return (
        <div className="student-container">
        <h1>Alumni Profile</h1>
            <span>id: {studentState.id}</span>
            <span>fname: {studentState.firstName}</span>
            <span>lname: {studentState.lastName}</span>
            <span>email: {studentState.email}</span>
            <span>graduationYear: {studentState.graduationYear}</span>
            <span>industry: {studentState.industry}</span>

        </div>
    );
}