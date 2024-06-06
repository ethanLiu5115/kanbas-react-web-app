import React from 'react';
import { BsGripVertical, BsPlus, BsChevronRight, BsChevronUp } from "react-icons/bs";
import { MdCheckCircle } from "react-icons/md";
import { IoEllipsisVerticalCircle } from "react-icons/io5";

export default function index() {
    return (
        <div id="wd-assignments">
            <div id="wd-assignments-header" className="mb-4">
                <h2 className="text-danger mb-3">
                    <BsGripVertical className="me-2" />
                    Search for Assignment
                </h2>
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search for Assignment"
                    />
                </div>
                <div className="d-flex justify-content-end">
                    <button className="btn btn-secondary me-2">
                        <BsPlus className="me-2" />
                        Group
                    </button>
                    <button className="btn btn-danger">
                        <BsPlus className="me-2" />
                        Assignment
                    </button>
                </div>
            </div>

            <ul className="list-group rounded-0">
                <li className="wd-module list-group-item p-0 mb-3 fs-5 border-0">
                    <div className="d-flex justify-content-between align-items-center p-3 ps-2 bg-light border-bottom">
                        <div className="d-flex align-items-center">
                            <BsGripVertical className="me-2 fs-3"/>
                            <h5 className="mb-0">ASSIGNMENTS</h5>
                        </div>
                        <div className="d-flex align-items-center">
                            <span className="badge bg-light" style={{color: 'black', border: '1px solid black'}}>40% of Total</span>
                            <BsPlus className="fs-4 ms-3" />
                            <IoEllipsisVerticalCircle className="fs-4 ms-3" />
                        </div>
                    </div>
                    <ul className="list-group rounded-0 rounded-0 border-5 border-start border-success">
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            <div>
                                <BsGripVertical className="me-2"/>
                                <a href="#/Kanbas/Courses/1234/Assignments/123" className="text-decoration-none"
                                   style={{color: 'black'}}>
                                    A1
                                </a>
                                <small className="text-muted d-block"><span className="text-danger">Multiple Modules</span> |
                                    Not available until May 6 at
                                    12:00am | <br />Due May 13 at 11:59pm | 100 pts</small>
                            </div>
                            <MdCheckCircle className="text-success"/>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            <div>
                                <BsGripVertical className="me-2"/>
                                <a href="#/Kanbas/Courses/1234/Assignments/123" className="text-decoration-none"
                                   style={{color: 'black'}}>
                                    A2
                                </a>
                                <small className="text-muted d-block"><span className="text-danger">Multiple Modules</span> |
                                    Not available until May 13 at
                                    12:00am | <br />Due May 13 at 11:59pm | 100 pts</small>
                            </div>
                            <MdCheckCircle className="text-success"/>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            <div>
                                <BsGripVertical className="me-2"/>
                                <a href="#/Kanbas/Courses/1234/Assignments/123" className="text-decoration-none"
                                   style={{color: 'black'}}>
                                    A3
                                </a>
                                <small className="text-muted d-block"><span className="text-danger">Multiple Modules</span> |
                                    Not available until May 20 at
                                    12:00am | <br />Due May 13 at 11:59pm | 100 pts</small>
                            </div>
                            <MdCheckCircle className="text-success"/>
                        </li>
                        {/* 添加更多Assignment项目 */}
                    </ul>
                </li>
            </ul>
        </div>
    );
}
