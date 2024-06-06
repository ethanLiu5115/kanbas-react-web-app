import React from 'react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import './Editor.css';

export default function Editor() {
    return (
        <div id="wd-assignments-editor" className="container">
            <h2 className="text-danger mb-3">Edit Assignment</h2>

            <div className="row mb-3">
                <label htmlFor="wd-name" className="col-sm-2 col-form-label">
                    Assignment Name
                </label>
                <div className="col-sm-10">
                    <input id="wd-name" className="form-control" defaultValue="A1 - ENV + HTML" />
                </div>
            </div>

            <div className="row mb-3">
                <label htmlFor="wd-description" className="col-sm-2 col-form-label">
                    Description
                </label>
                <div className="col-sm-10">
          <textarea
              id="wd-description"
              className="form-control"
              rows={5}
              defaultValue="The assignment is available online. Submit a link to the landing page of your project running on Netlify. The landing page should include the following: your full name and section, links to each of the lab assignments, link to the Kanbas application, links to all relevant source code repositories. The Kanbas application should include a link to navigate back to the landing page."
          />
                </div>
            </div>

            <div className="row mb-3">
                <label htmlFor="wd-points" className="col-sm-2 col-form-label">
                    Points
                </label>
                <div className="col-sm-10">
                    <input id="wd-points" className="form-control" type="number" defaultValue={100} />
                </div>
            </div>

            <div className="row mb-3">
                <label htmlFor="wd-assignment-group" className="col-sm-2 col-form-label">
                    Assignment Group
                </label>
                <div className="col-sm-10">
                    <select id="wd-assignment-group" className="form-control">
                        <option>ASSIGNMENTS</option>
                        <option>Group 1</option>
                        <option>Group 2</option>
                    </select>
                </div>
            </div>

            <div className="row mb-3">
                <label htmlFor="wd-display-grade" className="col-sm-2 col-form-label">
                    Display Grade as
                </label>
                <div className="col-sm-10">
                    <select id="wd-display-grade" className="form-control">
                        <option>Percentage</option>
                        <option>Points</option>
                    </select>
                </div>
            </div>

            <div className="row mb-3">
                <label htmlFor="wd-submission-type" className="col-sm-2 col-form-label">
                    Submission Type
                </label>
                <div className="col-sm-10">
                    <select id="wd-submission-type" className="form-control">
                        <option>Online</option>
                        <option>On Paper</option>
                    </select>
                </div>
            </div>

            <div className="row mb-3">
                <div className="offset-sm-2 col-sm-10">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="text-entry" />
                        <label className="form-check-label" htmlFor="text-entry">
                            Text Entry
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="website-url" />
                        <label className="form-check-label" htmlFor="website-url">
                            Website URL
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="media-recordings" />
                        <label className="form-check-label" htmlFor="media-recordings">
                            Media Recordings
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="student-annotation" />
                        <label className="form-check-label" htmlFor="student-annotation">
                            Student Annotation
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="file-uploads" />
                        <label className="form-check-label" htmlFor="file-uploads">
                            File Uploads
                        </label>
                    </div>
                </div>
            </div>

            <div className="row mb-3">
                <label htmlFor="wd-assign-to" className="col-sm-2 col-form-label">
                    Assign to
                </label>
                <div className="col-sm-10">
                    <select id="wd-assign-to" className="form-control">
                        <option>Everyone</option>
                        <option>Group 1</option>
                        <option>Group 2</option>
                    </select>
                </div>
            </div>

            <div className="row mb-3">
                <label htmlFor="wd-due-date" className="col-sm-2 col-form-label">
                    Due
                </label>
                <div className="col-sm-10">
                    <input id="wd-due-date" className="form-control" type="datetime-local" defaultValue="2024-05-13T23:59" />
                </div>
            </div>

            <div className="row mb-3">
                <label className="col-sm-2 col-form-label">
                    Available from
                </label>
                <div className="col-sm-4">
                    <input className="form-control" type="datetime-local" defaultValue="2024-05-06T12:00" />
                </div>
                <label className="col-sm-2 col-form-label text-center">
                    Until
                </label>
                <div className="col-sm-4">
                    <input className="form-control" type="datetime-local" />
                </div>
            </div>

            <div className="d-flex justify-content-end">
                <button className="btn btn-secondary me-2">
                    <FaTimesCircle className="me-1" /> Cancel
                </button>
                <button className="btn btn-success">
                    <FaCheckCircle className="me-1" /> Save
                </button>
            </div>
        </div>
    );
}
