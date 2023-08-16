import { useEffect, useState } from 'react';
import Job from './Job';
import axios from 'axios';
export default function JobPage() {
    let [jobState, setJobState] = useState({
        jobs: []
    })



    const getJobs = async () => {
        try {
            const response = await axios.get('http://localhost:8080/job');
            console.log(response.data);

            // Clear existing reviews and add new ones
            setJobState({
                jobs: response.data
            });
        } catch (error) {
            console.error('Axios Error:', error);
        }
    };

    useEffect(() => {
        getJobs();
    }, []);



    function listJobs(jobs) {
        return jobs.map((job) => {
            return (
                <div key={job.id} className="review-container">
                    <Job job={job} />
                </div>
            )
        });
    }



    return (
        <div>
            <h1>Job Portal</h1>
            {listJobs(jobState.jobs)}
        </div>
    );
}