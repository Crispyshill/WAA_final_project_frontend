import { useEffect, useState } from 'react';
import axios from 'axios';
import News from './News';
export default function NewsPage() {
    let [newsState, setNewsState] = useState({
        newses: []
    })


    const getNews = async () => {
        try {
            const response = await axios.get('http://localhost:8080/news');
            console.log(response.data);

            // Clear existing reviews and add new ones
            setNewsState({
                newses: response.data
            });
        } catch (error) {
            console.error('Axios Error:', error);
        }
    };

    useEffect(() => {
        getNews();
    }, []);



    function listNews(newses) {
        return newses.map((news) => {
            return (
                <div key={news.id} className="review-container">
                    <News news={news} />
                </div>
            )
        });
    }



    return (
        <div>
            <h1>News Portal</h1>
            {listNews(newsState.newses)}
        </div>
    );
}