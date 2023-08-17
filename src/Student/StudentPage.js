import { useEffect, useState } from 'react';
import Student from './Student';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom'

export default function StudentPage() {
    let navigate = useNavigate();
    let [studentState, setStudentState] = useState({
        students: []
    })
    let [searchParams, setSearchParams] = useState({
        gradYear: "",
        course: "",
        locationParam: "",
        industry: ""
    })
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    const gradYear = queryParams.get('graduationYear');
    const course = queryParams.get('course');
    const locationParam = queryParams.get('location');
    const industry = queryParams.get('industry');


    const onChanged = (e) => {
        setSearchParams({ ...searchParams, [e.target.name]: e.target.value });
    }

    const getStudents = async () => {
        try {
            let allStudentsResponse = await axios.get('http://localhost:8080/student');
            let allStudents = allStudentsResponse.data;
            console.log(allStudents);

            if (gradYear) {
                console.log("There is a graduation year! -> " + gradYear);
                let searchedStudentsResponse = await axios.get('http://localhost:8080/student/graduation/' + gradYear);
                let searchedStudents = searchedStudentsResponse.data;
                allStudents = allStudents.filter(student => searchedStudents.some(s => s.id === student.id));
                console.log(allStudents);
            }

            if (course) {
                let courseStudentsResponse = await axios.get('http://localhost:8080/student/course/' + course);
                let courseStudents = courseStudentsResponse.data;
                allStudents = allStudents.filter(student => courseStudents.some(s => s.id === student.id));
                console.log(allStudents);
            }

            if (locationParam) {
                let locationStudentsResponse = await axios.get('http://localhost:8080/student/location/' + locationParam);
                let locationStudents = locationStudentsResponse.data;
                allStudents = allStudents.filter(student => locationStudents.some(s => s.id === student.id));
                console.log(allStudents);
            }

            if (industry) {
                let industryStudentsResponse = await axios.get('http://localhost:8080/student/industry/' + industry);
                let industryStudents = industryStudentsResponse.data;
                allStudents = allStudents.filter(student => industryStudents.some(s => s.id === student.id));
                console.log(allStudents);
            }

            setStudentState({
                students: allStudents
            });

        } catch (error) {
            console.log(error);
        }
    };


    useEffect(() => {
        getStudents();
    }, [searchParams]);



    function listStudents(students) {
        return students.map((student, i) => {
            return (
                <div key={i} className="review-container">
                    <Student student={student} />
                </div>
            )
        });
    }
    const search = () => {
        let searchString = "/alumni";
        let queryParams = [];

        if (searchParams.gradYear !== "") {
            queryParams.push("graduationYear=" + searchParams.gradYear);
        }
        if (searchParams.course !== "") {
            queryParams.push("course=" + searchParams.course);
        }
        if (searchParams.locationParam !== "") {
            queryParams.push("location=" + searchParams.locationParam);
        }
        if (searchParams.industry !== "") {
            queryParams.push("industry=" + searchParams.industry);
        }

        if (queryParams.length > 0) {
            searchString += "?" + queryParams.join("&");
        }

        navigate(searchString);
        setSearchParams({ ...searchParams });
    };




    return (
        <div>
            <h1>Alumni Directory</h1>
            <div>Search By:
                Graduation Year: <input type="text" name="gradYear" value={searchParams.gradYear} onChange={onChanged} />
                Course: <input type="text" name="course" value={searchParams.course} onChange={onChanged} />
                Location: <input type="text" name="locationParam" value={searchParams.locationParam} onChange={onChanged} />
                Industry: <input type="text" name="industry" value={searchParams.industry} onChange={onChanged} />
                <button onClick={search }>Search!</button>



            </div>
            {listStudents(studentState.students)}
        </div>
    );
}