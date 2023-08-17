import logo from './logo.svg';
import './App.css';

import axios from 'axios';
import { useEffect } from 'react';
import {Link, Route, Routes } from 'react-router-dom'
import StudentPage from './Student/StudentPage';
import StudentDetails from './Student/StudentDetails';
import JobPage from './Job/JobPage';
import JobDetails from './Job/JobDetails';
import EventPage from './Event/EventPage';
import EventDetails from './Event/EventDetails';
import NewsPage from './News/NewsPage';
import NewsDetails from './News/NewsDetails';
import SurveyDetails from './Survey/SurveyDetails';
import SurveyPage from './Survey/SurveyPage';
import AdminDashboard from './Admin/AdminDashboard';

import StudentPageAdmin from './Student/StudentPageAdmin';
import JobPageAdmin from './Job/JobPageAdmin';
import EventPageAdmin from './Event/EventPageAdmin';
import NewsPageAdmin from './News/NewsPageAdmin';
import SurveyPageAdmin from './Survey/SurveyPageAdmin';
import Home from './Home';



function App() {
   

    return (

        <div className="App">
            <div className="navigation-menu">
                <ul>
                    <li>
                    <Link to="/">Home</Link>
                    </li>
                    <li>
                    <Link to="/alumni">Alumni Directory</Link>
                    </li>
                    <li>
                    <Link to="/job">Job Portal</Link>
                    </li>
                    <li>
                    <Link to="/event">Event Portal</Link>
                    </li>
                    <li>
                    <Link to="/news">News Portal</Link>
                    </li>
                    <li>
                    <Link to="/survey">Survey Portal</Link>
                    </li>
                    <li>
                        <Link to="/admin">Admin Dashboard</Link>
                    </li>
                
                </ul>

            </div>
            
            <Routes>
                <Route path="/" element={<Home/> }/>
                <Route path='/alumni' element={<StudentPage />}></Route>
                <Route path='/alumni/:id' element={<StudentDetails />}></Route>
                <Route path='/job' element={<JobPage />}></Route>
                <Route path='/job/:id' element={<JobDetails />}></Route>
                <Route path='/event' element={<EventPage />}></Route>
                <Route path='/event/:id' element={<EventDetails />}></Route>
                <Route path='/news' element={<NewsPage />}></Route>
                <Route path='/news/:id' element={<NewsDetails />}></Route>
                <Route path='/survey' element={<SurveyPage />}></Route>
                <Route path='/survey/:id' element={<SurveyDetails />}></Route>
                <Route path='/admin' element={<AdminDashboard />}></Route>

                <Route path='/admin/alumni' element={<StudentPageAdmin />}></Route>
                <Route path='/admin/job' element={<JobPageAdmin />}></Route>
                <Route path='/admin/event' element={<EventPageAdmin />}></Route>
                <Route path='/admin/news' element={<NewsPageAdmin />}></Route>
                <Route path='/admin/survey' element={<SurveyPageAdmin />}></Route>

            </Routes>

        </div>
    );

}


export default App;
