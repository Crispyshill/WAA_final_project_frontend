import { useNavigate } from 'react-router-dom';
import Address from '../Address'
import Student from '../Student/Student';
export default function Job(props) {

    let navigate = useNavigate();
    function onClick() {
        navigate('/job/' + props.job.id);
    }

    return (
        <div className='Job' onClick={onClick}>
            <span>Id: {props.job.id}</span>
            <span>, company name: {props.job.companyName}</span>
            <span>, industry: {props.job.industry}</span>
            <h4>Student who posted the job: </h4>
            <span> <Student student={ props.job.student}/></span>
            <Address address={props.job.address }/>
        </div>
    );
}