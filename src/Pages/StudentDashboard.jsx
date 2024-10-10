import React, { useState } from 'react';

const StudentDashboard = () => {
  const [courses, setCourses] = useState([
    { id: 1, title: 'Math 201', assignments: [{ title: 'Assignment 1', dueDate: '2024-10-15' }] }
  ]);
  const [submissions, setSubmissions] = useState({});

  // Handle assignment submission
  const handleSubmit = (courseId, assignmentTitle, submission) => {
    setSubmissions({ ...submissions, [`${courseId}-${assignmentTitle}`]: submission });
  };

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5" style={{ fontWeight: 'bold', color: '#4a4a4a' }}>
        Student Dashboard - View Courses & Submit Assignments
      </h1>
      
      {/* Display Enrolled Courses */}
      <section>
        <h2 className="h4 mb-4" style={{ fontWeight: 'bold', color: '#595959', fontSize: '1.5rem', textAlign: 'center' }}>My Courses</h2>
        <div className="row justify-content-center">
          {courses.map(course => (
            <div key={course.id} className="col-md-8 mb-4">
              <div className="card shadow-sm p-4" style={{ borderRadius: '15px', transition: 'transform 0.2s', backgroundColor: '#f5f7fa' }}>
                <h3 className="h5 mb-3" style={{ color: '#333' }}>{course.title}</h3>
                <ul className="list-unstyled">
                  {course.assignments.map(assignment => (
                    <li key={assignment.title} className="mb-4">
                      <div style={{ fontSize: '1.1rem' }}>
                        <strong>{assignment.title}</strong> - Due: {assignment.dueDate}
                      </div>
                      <form
                        onSubmit={(e) => {
                          e.preventDefault();
                          handleSubmit(course.id, assignment.title, e.target.submission.value);
                        }}
                        className="mt-2"
                      >
                        <div className="input-group">
                          <input
                            type="text"
                            name="submission"
                            placeholder="Submit Assignment URL"
                            className="form-control"
                            style={{
                              borderRadius: '10px',
                              transition: 'border-color 0.2s',
                            }}
                          />
                          <button
                            type="submit"
                            className="btn btn-success ml-2"
                            style={{
                              borderRadius: '10px',
                              fontWeight: 'bold',
                              transition: 'transform 0.2s, background-color 0.2s',
                            }}
                            onMouseEnter={(e) => (e.target.style.transform = 'scale(1.05)')}
                            onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
                          >
                            Submit
                          </button>
                        </div>
                      </form>
                      <p className="mt-2 text-muted">
                        Submission: {submissions[`${course.id}-${assignment.title}`] || 'Not submitted yet'}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default StudentDashboard;
