import {Link } from 'react-router-dom'
export default function AdminDashboard() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/admin/alumni">Alumni Directory</Link>
                </li>
                <li>
                    <Link to="/admin/job">Job Portal</Link>
                </li>
                <li>
                    <Link to="/admin/event">Event Portal</Link>
                </li>
                <li>
                    <Link to="/admin/news">News Portal</Link>
                </li>
                <li>
                    <Link to="/admin/survey">Survey Portal</Link>
                </li>

            </ul>
        </div>
    )
}