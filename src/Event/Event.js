import { useNavigate } from 'react-router-dom';

export default function Event(props) {

    let navigate = useNavigate();
    function onClick() {
        navigate('/event/' + props.event.id);
    }

    return (
        <div className='Event' onClick={onClick}>
            <span>Id: {props.event.id}</span>
            <span>, name: {props.event.name}</span>
            <span>, date: {props.event.date}</span>
            <span>, description: {props.event.category}</span>
            <span>, category: {props.event.category}</span>
        </div>
    );
}