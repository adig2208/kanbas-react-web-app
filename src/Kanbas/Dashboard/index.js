import { Link } from "react-router-dom";
import courses from "../Database/courses.json"; // adjust the path as needed
import './index.css';
import CourseCard from "./CourseCard";
function Dashboard() {
  return (
    <main role="main" className="col-md-10 col-lg-10">
      <div className="content-wrapper">
        <div className="fixed-header">
          <div className="top-section">
            <div className="dashboard">
              Dashboard
            </div>
          </div>
          <hr />
        </div>
        <div className="inner-content">
          <div className="published-courses">Published Courses({courses.length})</div>
          <hr />
          <div className="row">
            {courses.map((course) => <CourseCard key={course._id} course={course} />)}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Dashboard;
