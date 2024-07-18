import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addAssignment, updateAssignment } from "./reducer";

function Editor() {
    const { cid, aid } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const assignments = useSelector((state: any) => state.assignmentsReducer.assignments);
    const assignment = aid ? assignments.find((a: any) => a._id === aid) : null;

    const [title, setTitle] = useState(assignment?.title || "");
    const [description, setDescription] = useState(assignment?.description || "");
    const [points, setPoints] = useState(assignment?.points || 100);
    const [dueDate, setDueDate] = useState(assignment?.dueDate || "");
    const [availableFromDate, setAvailableFromDate] = useState(assignment?.availableFromDate || "");
    const [availableUntilDate, setAvailableUntilDate] = useState(assignment?.availableUntilDate || "");

    useEffect(() => {
        if (assignment) {
            setTitle(assignment.title);
            setDescription(assignment.description);
            setPoints(assignment.points);
            setDueDate(assignment.dueDate);
            setAvailableFromDate(assignment.availableFromDate);
            setAvailableUntilDate(assignment.availableUntilDate);
        }
    }, [assignment]);

    const handleSave = () => {
        const newAssignment = {
            ...assignment,
            title,
            description,
            points,
            dueDate,
            availableFromDate,
            availableUntilDate,
            course: cid,
        };
        if (assignment) {
            dispatch(updateAssignment(newAssignment));
        } else {
            dispatch(addAssignment(newAssignment));
        }
        navigate(`/Kanbas/Courses/${cid}/Assignments`);
    };

    return (
        <div className="container mt-4">
            <h2>{assignment ? "Edit Assignment" : "Add Assignment"}</h2>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Assignment Name</label>
                <input
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="form-control"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="form-control"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="points" className="form-label">Points</label>
                <input
                    id="points"
                    type="number"
                    value={points}
                    onChange={(e) => setPoints(Number(e.target.value))}
                    className="form-control"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="dueDate" className="form-label">Due Date</label>
                <input
                    id="dueDate"
                    type="date"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                    className="form-control"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="availableFromDate" className="form-label">Available from</label>
                <input
                    id="availableFromDate"
                    type="date"
                    value={availableFromDate}
                    onChange={(e) => setAvailableFromDate(e.target.value)}
                    className="form-control"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="availableUntilDate" className="form-label">Available until</label>
                <input
                    id="availableUntilDate"
                    type="date"
                    value={availableUntilDate}
                    onChange={(e) => setAvailableUntilDate(e.target.value)}
                    className="form-control"
                />
            </div>
            <button onClick={handleSave} className="btn btn-success">
                Save
            </button>
            <button
                onClick={() => navigate(`/Kanbas/Courses/${cid}/Assignments`)}
                className="btn btn-danger"
            >
                Cancel
            </button>
        </div>
    );
}

export default Editor;