import { useNavigate } from 'react-router-dom';

export default function News(props) {

    let navigate = useNavigate();
    function onClick() {
        navigate('/news/' + props.news.id);
    }

    return (
        <div className='News' onClick={onClick}>
            <span>Id: {props.news.id}</span>
            <span>, title: {props.news.title}</span>
            <span>, body: {props.news.body}</span>

        </div>
    );
}