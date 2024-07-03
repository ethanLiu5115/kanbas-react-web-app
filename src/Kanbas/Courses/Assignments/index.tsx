import React from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteAssignment } from "./reducer";
import { BsPlus } from "react-icons/bs";
import { MdCheckCircle } from "react-icons/md";
import { IoEllipsisVertical } from "react-icons/io5";
import { RiNewspaperLine } from "react-icons/ri";

function Assignments() {
    const { cid } = useParams();
    const assignments = useSelector((state: any) =>
        state.assignmentsReducer.assignments.filter(
            (assignment: any) => assignment.course === cid
        )
    );
    const dispatch = useDispatch();

    const handleDelete = (id: string) => {
        if (window.confirm("Are you sure you want to delete this assignment?")) {
            dispatch(deleteAssignment(id));
        }
    };

    return (
        <div>
            <h2>Assignments for course {cid}</h2>
            <div className="float-end">
                <Link
                    to={`/Kanbas/Courses/${cid}/Assignments/new`}
                    className="btn btn-danger"
                >
                    <BsPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                    Assignment
                </Link>
            </div>
            <div className="list-group mt-4">
                {assignments.map((assignment: any) => (
                    <div key={assignment._id} className="list-group-item">
                        <div className="d-flex justify-content-between align-items-center">
                            <div>
                                <RiNewspaperLine className="me-2 fs-3" />
                                <Link
                                    to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                                    className="fw-bold text-decoration-none text-dark"
                                >
                                    {assignment.title}
                                </Link>
                            </div>
                            <div>
                                <Link
                                    to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                                    className="btn btn-sm btn-secondary me-2"
                                >
                                    Edit
                                </Link>
                                <button
                                    onClick={() => handleDelete(assignment._id)}
                                    className="btn btn-sm btn-danger"
                                >
                                    Delete
                                </button>
                                <MdCheckCircle className="text-success ms-2" />
                                <IoEllipsisVertical className="ms-2" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Assignments;
