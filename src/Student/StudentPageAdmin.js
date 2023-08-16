import { useEffect, useState } from 'react';
import CreateStudent from './CreateStudent';
import Student from './Student';
import axios from 'axios';
export default function StudentPage() {
    let [studentState, setStudentState] = useState({
        students: []
    })

    function addStudent(newStudent) {
        setStudentState((prevState) => ({
            ...prevState,
            students: [...prevState.students, newStudent],
        }));
    }

    const getStudents = async () => {
        try {
            const response = await axios.get('http://localhost:8080/student');
            console.log(response.data);

            // Clear existing reviews and add new ones
            setStudentState({
                students: response.data
            });
        } catch (error) {
            console.error('Axios Error:', error);
        }
    };

    useEffect(() => {
        getStudents();
    }, []);



    function listStudents(students) {
        return students.map((student, i) => {
            return (
                <div key={i} className="review-container">
                    <Student student={student} />
                </div>
            )
        });
    }



    return (
        <div>
        <h1>Alumni Directory</h1>
            <CreateStudent addStudent={addStudent} />
            {listStudents(studentState.students)}
        </div>
    );
}