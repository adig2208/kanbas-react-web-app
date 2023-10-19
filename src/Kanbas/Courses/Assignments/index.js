import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faEllipsisV
} from '@fortawesome/free-solid-svg-icons'
import AssignmentList from "./AssignmentList";
import './assign.css';
function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId);
  return (
    <div class="col-md-9 right-content">
                            <div class="row">
                                <div class="col-7">
                                    <input type="text" class="form-control margin-top input-width" placeholder="Search for Assignments" id="Assignment-Names"/>
                                </div>
                                <div class="col-5 margin-top">
                                    <button type="button" class="btn btn-light float-right">
                                        <i class=" black-color"><FontAwesomeIcon icon={faEllipsisV}/></i>
                                    </button>
                                    <button type="button" class="btn btn-danger float-right" style={{marginRight:10}} >+ Assignment</button>
                                    <button type="button" class="btn btn-light float-right" style={{marginRight:10}}>+ Group</button>

                                    <div class="dropdown-menu ">
                                        <button class="dropdown-item" type="button" id="edit-assignment-dates">Edit Assignment Dates</button>
                                        <button class="dropdown-item" type="button" id="speed-grader">Speed Grader</button>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                            <AssignmentList/>
    </div>
  );
}
export default Assignments;