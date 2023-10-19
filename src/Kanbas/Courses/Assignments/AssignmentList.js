import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGripVertical, faEllipsisV, faClipboard, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import './assign.css';
function Assignments() {
    const { courseId } = useParams();
    const assignments = db.assignments;
    const courseAssignments = assignments.filter(
        (assignment) => assignment.course === courseId
    );

    return (
        <div style={{marginLeft:5}}>
            <div className="row margin-top-20">
                <div className="col-12 assignment-container d-flex align-items-center background-color-change custom-right-padding height left-pad">
                    <div className="p-container background-color-change set-heading">
                        <i className="black-color"><FontAwesomeIcon icon={faGripVertical} /></i>
                        <p className="assignment-title mb-0 custom-font-size margin-left-5">ASSIGNMENTS</p>
                    </div>
                    <div className="custom-left-padding">
                        <button className="oval-button background-color-change">40% of Total</button>
                        <button className="background-color-change" style={{ border: 0 }}>+</button>
                        <i className="black-color"><FontAwesomeIcon icon={faEllipsisV} /></i>
                    </div>
                </div>
            </div>
            <div>
                {courseAssignments.map((assignment) => (
                    <div className="row left-border" key={assignment._id}>
                        <div className="d-flex align-items-center padding-top-10">
                            <div className="drag-handle margin-bottom-20" draggable="true">
                                <button type="button" className="lbs">
                                    <i className="fas fa-grip-vertical black-color"><FontAwesomeIcon icon={faGripVertical} /></i>
                                </button>
                                <button type="button" className="lbs">
                                    <i className="far fa-clipboard colorpad"><FontAwesomeIcon icon={faClipboard} /></i>
                                </button>
                            </div>
                            <div>
                                <Link to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`} className="set-font-style">
                                    {assignment._id} - {assignment.title}
                                </Link>
                            </div>
                            <div className="margin-bottom-20 margin-left">
                                <button type="button" className="button-setup" disabled>
                                    <i className="fas fa-check-circle correct-symbol"><FontAwesomeIcon icon={faCheckCircle} /></i>
                                </button>
                                <button type="button" className="button-setup">
                                    <i className="fas fa-ellipsis-v"><FontAwesomeIcon icon={faEllipsisV} /></i>
                                </button>
                            </div>
                        </div>
                        <hr />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Assignments;
