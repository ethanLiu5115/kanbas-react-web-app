import React from 'react';
import { FaFileImport, FaFileExport } from 'react-icons/fa';
import './Grades.css';

const Grades = () => {
    return (
        <div className="container">
            <div className="d-flex justify-content-between align-items-center my-3">
                <h2>Grades</h2>
                <div>
                    <button className="btn btn-secondary me-2">
                        <FaFileImport className="me-1" /> Import
                    </button>
                    <div className="btn-group">
                        <button
                            type="button"
                            className="btn btn-secondary dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <FaFileExport className="me-1" /> Export
                        </button>
                        <ul className="dropdown-menu">
                            <li>
                                <a className="dropdown-item" href="#">
                                    Export as CSV
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                    Export as PDF
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <table className="table table-bordered">
                <thead>
                <tr>
                    <th>Student Name</th>
                    <th>Grade</th>
                    <th>Comments</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>John Doe</td>
                    <td>
                        <input type="text" defaultValue="A" className="form-control" />
                    </td>
                    <td>Good job</td>
                </tr>
                {/* Add more rows as needed */}
                </tbody>
            </table>
        </div>
    );
};

export default Grades;
