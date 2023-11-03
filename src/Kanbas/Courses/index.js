import {
  Navigate,
  Route,
  Routes,
  useParams,
  useLocation,
} from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor/AssignmentEditor";
import "./course.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faGlasses } from "@fortawesome/free-solid-svg-icons";

function Courses({ courses }) {
  const { courseId } = useParams();
  const course = courses.find((course) => course._id == courseId); //Check this change
  const location = useLocation();

  const getBreadcrumbText = () => {
    const pathSegments = location.pathname.split("/");

    const segment =
      pathSegments.length > 1 &&
      pathSegments[pathSegments.length - 2] === "Assignments"
        ? pathSegments[pathSegments.length - 2]
        : pathSegments.pop();

    switch (segment) {
      case "Home":
        return "Home";
      case "Modules":
        return "Modules";
      case "Assignments":
        return "Assignments";
      case "Grades":
        return "Grades";
      default:
        return "Home";
    }
  };
  return (
    <main role="main" className="col-md-12 ml-sm-auto col-lg-12 px-md-4">
      <div className="content-wrapper">
        <nav
          ariaLabel="breadcrumb"
          className="d-flex justify-content-between align-items-center old-navbar"
          style={{ marginTop: "20px" }}
        >
          <ol className="breadcrumb">
            <li>
               
              <a
                href="#"
                className="text-danger"
                style={{ textDecoration: "none" }}
              >
                 
                <i className="icon-space">
                   
                  <FontAwesomeIcon icon={faBars} />
                </i> 
              </a>
            </li>
            <li className="breadcrumb-item">
               
              <a
                href="#"
                className="text-danger"
                style={{ textDecoration: "none" }}
              >
                 
                {course.name} 
              </a>
            </li>
            <li className="breadcrumb-item active" ariaCurrent="page">
               
              {getBreadcrumbText()} 
            </li> 
          </ol> 
          <button className="btn btn-secondary float-end color-change">
             
            <i className="icon-space2">
               
              <FontAwesomeIcon icon={faGlasses} />
            </i> 
            Student View 
          </button> 
        </nav> 
        <hr />
        <div className="row">
          <CourseNavigation />
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} /> 
            <Route path="Home" element={<Home />} /> 
            <Route path="Modules" element={<Modules />} /> 
            <Route path="Assignments" element={<Assignments />} /> 
            <Route
              path="Assignments/:assignmentId"
              element={<AssignmentEditor />}
            /> 
            <Route path="Grades" element={<h1> Grades </h1>} />
          </Routes> 
        </div> 
      </div> 
    </main>
  );
}
export default Courses;
