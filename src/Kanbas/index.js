import React, { useState } from "react";
import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import db from "./Database";
import { Provider } from "react-redux"; // Import Provider
import store from "./store"; // Import the store

function Kanbas() {
    const [courses, setCourses] = useState(db.courses);
    const [course, setCourse] = useState({
        name: "",
        number: "",
        startDate: "",
        endDate: "",
    });

    const addNewCourse = () => {
        setCourses([...courses, {...course, _id: new Date().getTime() }]);
    };

    const deleteCourse = (courseId) => {
        setCourses(courses.filter(c => c._id !== courseId));
    };

    const updateCourse = (courseId, name) => {
        setCourses(courses.map(c => (c._id === courseId ? {...c, name } : c)));
    };

    return ( <
            Provider store = { store } >
            <
            div className = "d-flex" >
            <
            KanbasNavigation / >
            <
            div style = {
                { display: 'contents' } } >
            <
            Routes >
            <
            Route path = "/"
            element = { < Navigate to = "Dashboard" / > }
            /> <
            Route path = "Account"
            element = { < h1 > Account < /h1>} / >
                <
                Route path = "Dashboard"
                element = { <
                    Dashboard
                    courses = { courses }
                    course = { course }
                    setCourse = { setCourse }
                    addNewCourse = { addNewCourse }
                    deleteCourse = { deleteCourse }
                    updateCourse = { updateCourse }
                    />
                }
                /> <
                Route path = "Courses/:courseId/*"
                element = { < Courses courses = { courses }
                    />} / >
                    <
                    /Routes> <
                    /div> <
                    /div> <
                    /Provider>
                );
            }

            export default Kanbas;