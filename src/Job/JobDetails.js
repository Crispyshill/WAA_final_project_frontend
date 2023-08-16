import { useParams } from 'react-router-dom';
import axios from 'axios';
import Address from '../Address';
import { useEffect, useState } from 'react';
import Student from '../Student/Student';

export default function JobDetails() {
    let { id } = useParams();
    let [jobState, setJobState] = useState({
        companyName: 'default',
        industry: 'default',
        student: {},
        address: {}
    });

    const getJobById = async () => {
        try {
            const response = await axios.get("http://localhost:8080/job/" + id);
            console.log("Thing: " + JSON.stringify(response.data))
            setJobState(response.data);
        }
        catch (error) {
            console.log(error);
        }

    }

    useEffect(() => { getJobById() }, []);

    return (
        <div className="job-container">
            <h1>Job Details</h1>
            <span>id: {jobState.id}</span>
            <span>companyName: {jobState.companyName}</span>
            <span>industry: {jobState.industry}</span>
            <span>student: <Student student={jobState.student }> </Student></span>
            <span>address: <Address address={jobState.address}/></span>

        </div>
    );
}