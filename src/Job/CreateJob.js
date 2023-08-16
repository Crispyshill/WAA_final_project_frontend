import { useState } from 'react';
import axios from 'axios';

export default function CreateJob({ addJob }) {
    let [jobState, setJobState] = useState({
        id: 'default',
        companyName: 'default',
        industry: 'default',
        student: 'default',
        address: {}
    })
    const onChanged = (e) => {
        setJobState({ ...jobState, [e.target.name]: e.target.value });
    }

    const createJob = async () => {
        try {
            let studentById = await axios.get("http://localhost:8080/student/" + jobState.student);
            console.log("id: " + jobState.id + ", companyName: " + jobState.companyName + ", studentName: " + JSON.stringify(studentById.data, null, 1));

            axios.post("http://localhost:8080/job", {
                id: jobState.id,
                companyName: jobState.companyName,
                industry: jobState.industry,
                student: studentById.data,
                address: {}
            });
            setJobState({
                id: 'default',
                companyName: 'default',
                industry: 'default',
                student: {},
                address: {}
            });
            addJob(jobState);
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            id: <input
                type='text'
                value={jobState.id}
                onChange={onChanged}
                name='id'
            />
            companyName: <input
                type='text'
                value={jobState.companyName}
                onChange={onChanged}
                name='companyName'
            />
            Industry: <input
                type='text'
                value={jobState.industry}
                onChange={onChanged}
                name='industry'
            />
            student: <input
                type='text'
                value={jobState.student}
                onChange={onChanged}
                name='student'
            />
           

            <button
                type='submit'
                onClick={createJob}
            >
                Create job</button>
        </div>
    );
}