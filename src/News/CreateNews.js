import { useState } from 'react';
import axios from 'axios';

export default function CreateNews({ addNews }) {
    let [newsState, setNewsState] = useState({
        id: 'default',
        title: 'default',
        body: 'default'
    })
    const onChanged = (e) => {
        setNewsState({ ...newsState, [e.target.name]: e.target.value });
    }

    const CreateNews = async () => {
        try {

            axios.post("http://localhost:8080/news", newsState);
            setNewsState({
                id: 'default',
                title: 'default',
                body: 'default'
            });
            addNews(newsState);
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            id: <input
                type='text'
                value={newsState.id}
                onChange={onChanged}
                name='id'
            />
            title: <input
                type='text'
                value={newsState.title}
                onChange={onChanged}
                name='title'
            />
            body: <input
                type='text'
                value={newsState.body}
                onChange={onChanged}
                name='body'
            />
           

            <button
                type='submit'
                onClick={CreateNews}
            >
                Create news</button>
        </div>
    );
}