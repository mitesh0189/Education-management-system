import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBookOpen } from '@fortawesome/free-solid-svg-icons';

const EnrollStudentForm = ({ onEnroll }) => {
  const [student, setStudent] = useState({ name: '', course: '' });

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onEnroll(student);
    setStudent({ name: '', course: '' });
  };

  return (
    <div className="container py-5" style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #f9f9f9, #e0e0e0)' }}>
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="card shadow-lg p-4" style={{ borderRadius: '20px', backgroundColor: '#fff' }}>
            <h3 className="text-center mb-4" style={{ fontWeight: 'bold', color: '#444' }}>Enroll Student</h3>
            <form onSubmit={handleSubmit}>

              <div className="form-group mb-4">
                <label className="form-label" style={{ fontWeight: 'bold' }}>
                  <FontAwesomeIcon icon={faUser} className="me-2" /> Student Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter student name"
                  value={student.name}
                  onChange={handleChange}
                  className="form-control"
                  style={{ borderRadius: '10px', padding: '10px' }}
                />
              </div>

              <div className="form-group mb-4">
                <label className="form-label" style={{ fontWeight: 'bold' }}>
                  <FontAwesomeIcon icon={faBookOpen} className="me-2" /> Course Title
                </label>
                <input
                  type="text"
                  name="course"
                  placeholder="Enter course title"
                  value={student.course}
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
                Enroll
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnrollStudentForm;
