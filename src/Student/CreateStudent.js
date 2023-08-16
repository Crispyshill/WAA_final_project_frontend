import { useState } from 'react';
import axios from 'axios';

export default function CreateStudent({addStudent }) {
    let [studentState, setStudentState] = useState({
        id: 'default',
        firstName: 'default',
        lastName: 'default',
        email: 'default',
        graduationYear: 'default', 
        industry: 'default'
    })
    const onChanged = (e) => {
        setStudentState({ ...studentState, [e.target.name]: e.target.value });
    }

    const createStudent = async () => {
        console.log("id: " + studentState.id + ", email: " + studentState.email);
        try {
            axios.post("http://localhost:8080/student", studentState);
            setStudentState({
                id: 'default',
                firstName: 'default',
                lastName: 'default',
                email: 'default',
                graduationYear: 'default',
                industry: 'default'
            });
            addStudent(studentState);
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            id: <input
                type='text'
                value={studentState.id}
                onChange={onChanged}
                name='id'
            />
            email: <input
                type='text'
                value={studentState.email}
                onChange={onChanged}
                name='email'
            />
            Graduation Year: <input
                type='text'
                value={studentState.graduationYear}
                onChange={onChanged}
                name='graduationYear'
            />
            Fname: <input
                type='text'
                value={studentState.fname}
                onChange={onChanged}
                name='firstName'
            />
            Lname: <input
                type='text'
                value={studentState.lname}
                onChange={onChanged}
                name='lastName'
            />
            Industry: <input
                type='text'
                value={studentState.industry}
                onChange={onChanged}
                name='industry'
            />

            <button
                type='submit'
                onClick={createStudent}
            >
                Create Student</button>
        </div>
    );
}