import { useNavigate } from 'react-router-dom';
import Responses from './Responses';

export default function Survey(props) {

    let navigate = useNavigate();
    function onClick() {
        navigate('/survey/' + props.survey.id);
    }

    return (
        <div className='Survey' onClick={onClick}>
            <span>Id: {props.survey.id}</span>
            <span>, name: {props.survey.name}</span>
            <span>, description: {props.survey.description}</span>

        </div>
    );
}