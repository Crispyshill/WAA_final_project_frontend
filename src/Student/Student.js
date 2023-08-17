import { useNavigate } from 'react-router-dom';

export default function Student(props) {

    let navigate = useNavigate();
    function onClick() {
        navigate('/alumni/' + props.student.id);
    }

    return (
        <div className='Student' onClick={onClick }>
            <span>Id: {props.student.id}</span>
            <span>, first name: {props.student.firstName}</span>
            <span>, last name: {props.student.lastName}</span>
            <span>, email: {props.student.email}</span>
            <span>, graduation year: {props.student.graduationYear}</span>
            <span>, industry: {props.student.industry} </span>
        </div>
    );
}