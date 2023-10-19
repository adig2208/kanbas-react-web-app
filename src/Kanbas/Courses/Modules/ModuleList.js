import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faCaretDown,
    faEllipsisV,
    faCheckCircle,
    faPlus
} from '@fortawesome/free-solid-svg-icons'

function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;
  
  return (
    <div className="mb-3">
      {
        modules
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <React.Fragment key={index}>
              <ul className="list-group module-groups">
                <li className="list-group-item list-group-item-secondary">
                  <FontAwesomeIcon icon={faEllipsisV} className="ellipse-color" />
                  <FontAwesomeIcon icon={faEllipsisV} className="ellipse-color icon-space2" />
                  <FontAwesomeIcon icon={faCaretDown} className="icon-space2" />
                  {module.name}
                  
                  <div className="float-end">
                    <div className="btn-group">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-success icon-space dropdown-toggle"/>
                      <ul className="dropdown-menu">
                        {/* You can put any dropdown items here */}
                      </ul>
                    </div>
                    <FontAwesomeIcon icon={faPlus} className="icon-space ellipse-color" />
                    <FontAwesomeIcon icon={faEllipsisV} className="ellipse-color" />
                  </div>
                </li>
                <li className="list-group-item left-border-line">
                  <FontAwesomeIcon icon={faEllipsisV} className="ellipse-color" />
                  <FontAwesomeIcon icon={faEllipsisV} className="ellipse-color icon-space-head" />
                  {module.description}
                    <i className="ellipse-color float-end "><FontAwesomeIcon icon={faEllipsisV}  /></i>
                    <i className="text-success float-end icon-space" ><FontAwesomeIcon icon={faCheckCircle} /></i>
                  
                </li>
              </ul>
            </React.Fragment>
          ))
      }
    </div>
  );
}

export default ModuleList;
