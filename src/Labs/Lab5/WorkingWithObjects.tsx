import React, { useState } from "react";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export default function WorkingWithObjects() {
    const [assignment, setAssignment] = useState({
        id: 1, title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10", completed: false, score: 0,
    });
    const [module, setModule] = useState({
        id: "M101",
        name: "Introduction to React",
        description: "Learn the basics of React",
        course: "Web Development"
    });
    const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`
    const MODULE_API_URL = `${REMOTE_SERVER}/lab5/module`;

    return (
        <div id="wd-working-with-objects">
            <h3 id="wd-working-with-objects">Working With Objects</h3>
            <h4>Modifying Properties</h4>
            <a id="wd-update-assignment-title"
                className="btn btn-primary float-end"
                href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}>
                Update Title
            </a>
            <input className="form-control w-75" id="wd-assignment-title"
                value={assignment.title} onChange={(e) =>
                setAssignment({ ...assignment, title: e.target.value })}/>
            <hr />
            <h4>Retrieving Objects</h4>
            <a
                id="wd-retrieve-assignments"
                className="btn btn-primary"
                href={`${REMOTE_SERVER}/lab5/assignment`}
            >
                Get Assignment
            </a>
            <hr />
            <h4>Retrieving Properties</h4>
            <a id="wd-retrieve-assignment-title" className="btn btn-primary"
                href={`${REMOTE_SERVER}/lab5/assignment/title`}>
                Get Title
            </a><hr/>
            <h4>Edit Assignment</h4>
            <input 
                type="number" 
                className="form-control mb-2" 
                value={assignment.score} 
                onChange={(e) => setAssignment({ ...assignment, score: parseInt(e.target.value) })}
            />
            <a id="wd-update-assignment-score" className="btn btn-secondary me-2"
               href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}>
                Update Assignment Score
            </a>
            <div className="form-check mb-2">
                <input 
                    type="checkbox" 
                    className="form-check-input" 
                    checked={assignment.completed}
                    onChange={(e) => setAssignment({ ...assignment, completed: e.target.checked })}
                />
                <label className="form-check-label">Completed</label>
            </div>
            <a id="wd-update-assignment-completed" className="btn btn-secondary"
               href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}>
                Update Assignment Completed Status
            </a>
            <h4>Module Operations</h4>
            <a id="wd-retrieve-module" className="btn btn-primary me-2"
               href={`${MODULE_API_URL}`}>
                Get Module
            </a>
            <a id="wd-retrieve-module-name" className="btn btn-success"
               href={`${MODULE_API_URL}/name`}>
                Get Module Name
            </a>
            <hr />

            <h4>Edit Module</h4>
            <input 
                className="form-control mb-2" 
                value={module.name} 
                onChange={(e) => setModule({ ...module, name: e.target.value })}
            />
            <a id="wd-update-module-name" className="btn btn-warning me-2"
               href={`${MODULE_API_URL}/name/${module.name}`}>
                Update Module Name
            </a>
            <input 
                className="form-control mb-2" 
                value={module.description} 
                onChange={(e) => setModule({ ...module, description: e.target.value })}
            />
            <a id="wd-update-module-description" className="btn btn-info"
               href={`${MODULE_API_URL}/description/${module.description}`}>
                Update Module Description
            </a>
            <hr />
        </div>
    );
}
