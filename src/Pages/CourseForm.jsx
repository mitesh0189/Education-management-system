import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faClipboard, faCalendarAlt, faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';

const CourseForm = ({ onSubmit }) => {
  const [course, setCourse] = useState({
    title: '',
    description: '',
    startDate: '',
    endDate: '',
    teacher: '',
  });

  const handleChange = (e) => {
    setCourse({ ...course, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(course);
    setCourse({ title: '', description: '', startDate: '', endDate: '', teacher: '' });
  };

  return (
    <div className="container py-5" style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #f0f4f8, #d9e8fc)' }}>
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card shadow-lg p-4" style={{ borderRadius: '20px', backgroundColor: '#fff' }}>
            <h3 className="text-center mb-4" style={{ fontWeight: 'bold', color: '#34495e' }}>Create a Course</h3>
            <form onSubmit={handleSubmit}>
              
              <div className="form-group mb-4">
                <label className="form-label" style={{ fontWeight: 'bold', color: '#34495e' }}>
                  <FontAwesomeIcon icon={faBook} className="me-2" /> Course Title
                </label>
                <input
                  type="text"
                  name="title"
                  placeholder="Enter course title"
                  value={course.title}
                  onChange={handleChange}
                  className="form-control"
                  style={{ borderRadius: '10px', padding: '12px', border: '1px solid #ccc' }}
                />
              </div>
              
              <div className="form-group mb-4">
                <label className="form-label" style={{ fontWeight: 'bold', color: '#34495e' }}>
                  <FontAwesomeIcon icon={faClipboard} className="me-2" /> Course Description
                </label>
                <textarea
                  name="description"
                  placeholder="Enter course description"
                  value={course.description}
                  onChange={handleChange}
                  className="form-control"
                  style={{ borderRadius: '10px', padding: '12px', height: '100px', border: '1px solid #ccc' }}
                />
              </div>

              <div className="form-row">
                <div className="form-group col-md-6 mb-4">
                  <label className="form-label" style={{ fontWeight: 'bold', color: '#34495e' }}>
                    <FontAwesomeIcon icon={faCalendarAlt} className="me-2" /> Start Date
                  </label>
                  <input
                    type="date"
                    name="startDate"
                    value={course.startDate}
                    onChange={handleChange}
                    className="form-control"
                    style={{ borderRadius: '10px', padding: '12px', border: '1px solid #ccc' }}
                  />
                </div>
                
                <div className="form-group col-md-6 mb-4">
                  <label className="form-label" style={{ fontWeight: 'bold', color: '#34495e' }}>
                    <FontAwesomeIcon icon={faCalendarAlt} className="me-2" /> End Date
                  </label>
                  <input
                    type="date"
                    name="endDate"
                    value={course.endDate}
                    onChange={handleChange}
                    className="form-control"
                    style={{ borderRadius: '10px', padding: '12px', border: '1px solid #ccc' }}
                  />
                </div>
              </div>

              <div className="form-group mb-4">
                <label className="form-label" style={{ fontWeight: 'bold', color: '#34495e' }}>
                  <FontAwesomeIcon icon={faChalkboardTeacher} className="me-2" /> Assigned Teacher
                </label>
                <input
                  type="text"
                  name="teacher"
                  placeholder="Enter teacher's name"
                  value={course.teacher}
                  onChange={handleChange}
                  className="form-control"
                  style={{ borderRadius: '10px', padding: '12px', border: '1px solid #ccc' }}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-block"
                style={{
                  fontWeight: 'bold',
                  padding: '12px',
                  borderRadius: '10px',
                  backgroundColor: '#3498db',
                  border: 'none',
                  transition: 'background-color 0.3s ease',
                }}
                onMouseEnter={(e) => (e.target.style.backgroundColor = '#2980b9')}
                onMouseLeave={(e) => (e.target.style.backgroundColor = '#3498db')}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseForm;
