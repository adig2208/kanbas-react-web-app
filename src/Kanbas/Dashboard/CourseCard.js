import './index.css';
import { Link } from 'react-router-dom';
import { 
    faEllipsisV,
    faEdit
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function CourseCard({ course }) {
    return (
      <div className="course-card col-md-3 col-lg-3">
        <div className="card">
          <div className={`upper-half back-dblue`}>
            <i className=" dots"><FontAwesomeIcon icon={faEllipsisV} /></i>
          </div>
          <div className="lower-half">
            <Link to={`/Kanbas/Courses/${course._id}`}>
              <div className={`font-dblue`}>{course.name}</div>
              <div className="course-number">{course.number}</div>
              <div className="course-term">{course.startDate} - {course.endDate}</div>
              <i ><FontAwesomeIcon icon={faEdit}/></i>
            </Link>
          </div>
        </div>
      </div>
    );
  }
  export default CourseCard