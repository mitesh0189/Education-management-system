import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBook, faStar } from '@fortawesome/free-solid-svg-icons';

const AssignGradesForm = ({ onAssign }) => {
  const [grade, setGrade] = useState({ student: '', course: '', grade: '' });

  const handleChange = (e) => {
    setGrade({ ...grade, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAssign(grade);
    setGrade({ student: '', course: '', grade: '' });
  };

  return (
    <div className="container py-5" style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #f7f9fc, #e2e8f0)' }}>
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="card shadow-lg p-4" style={{ borderRadius: '20px', backgroundColor: '#fff' }}>
            <h3 className="text-center mb-4" style={{ fontWeight: 'bold', color: '#444' }}>Assign Grade</h3>
            <form onSubmit={handleSubmit}>
              
              <div className="form-group mb-4">
                <label className="form-label" style={{ fontWeight: 'bold' }}>
                  <FontAwesomeIcon icon={faUser} className="me-2" /> Student Name
                </label>
                <input
                  type="text"
                  name="student"
                  placeholder="Enter student name"
                  value={grade.student}
                  onChange={handleChange}
                  className="form-control"
                  style={{ borderRadius: '10px', padding: '10px' }}
                />
              </div>
              
              <div className="form-group mb-4">
                <label className="form-label" style={{ fontWeight: 'bold' }}>
                  <FontAwesomeIcon icon={faBook} className="me-2" /> Course Title
                </label>
                <input
                  type="text"
                  name="course"
                  placeholder="Enter course title"
                  value={grade.course}
                  onChange={handleChange}
                  className="form-control"
                  style={{ borderRadius: '10px', padding: '10px' }}
                />
              </div>
              
              <div className="form-group mb-4">
                <label className="form-label" style={{ fontWeight: 'bold' }}>
                  <FontAwesomeIcon icon={faStar} className="me-2" /> Grade
                </label>
                <input
                  type="text"
                  name="grade"
                  placeholder="Enter grade"
                  value={grade.grade}
                  onChange={handleChange}
                  className="form-control"
                  style={{ borderRadius: '10px', padding: '10px' }}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-block"
                style={{
                  fontWeight: 'bold',
                  padding: '12px',
                  borderRadius: '10px',
                  backgroundColor: '#007bff',
                  transition: 'background-color 0.3s ease',
                }}
              >
                Assign Grade
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignGradesForm;
