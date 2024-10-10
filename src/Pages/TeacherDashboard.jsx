import React, { useState } from 'react';

const TeacherDashboard = () => {
  const [courses, setCourses] = useState([
    { id: 1, title: 'Math 201', assignments: [{ title: 'Assignment 1', dueDate: '2024-10-15' }] }
  ]);
  const [newAssignment, setNewAssignment] = useState({ courseId: '', title: '', dueDate: '' });

  // Handle form input for assignment
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewAssignment({ ...newAssignment, [name]: value });
  };

  // Add assignment to a course
  const addAssignment = () => {
    const updatedCourses = courses.map(course => {
      if (course.id === parseInt(newAssignment.courseId)) {
        course.assignments.push({ title: newAssignment.title, dueDate: newAssignment.dueDate });
      }
      return course;
    });
    setCourses(updatedCourses);
    setNewAssignment({ courseId: '', title: '', dueDate: '' });
  };

  return (
    <div className="container py-5">
      <h1 className="h2 mb-5 text-center" style={{ fontWeight: 'bold', color: '#343a40' }}>Teacher Dashboard</h1>

      {/* Assignments Form */}
      <section className="mb-5">
        <h2 className="h4 text-center mb-4" style={{ fontWeight: 'bold', color: '#495057' }}>Add New Assignment</h2>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card shadow-sm p-4" style={{ borderRadius: '20px', backgroundColor: '#ffffff' }}>
              <form>
                <div className="form-group mb-3">
                  <label htmlFor="courseId" className="form-label font-weight-bold">Select Course</label>
                  <select
                    name="courseId"
                    id="courseId"
                    value={newAssignment.courseId}
                    onChange={handleChange}
                    className="form-control"
                    style={{ padding: '10px', borderRadius: '10px' }}
                  >
                    <option value="">Choose Course</option>
                    {courses.map(course => (
                      <option key={course.id} value={course.id}>{course.title}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group mb-3">
                  <label htmlFor="title" className="form-label font-weight-bold">Assignment Title</label>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    placeholder="Enter Assignment Title"
                    value={newAssignment.title}
                    onChange={handleChange}
                    className="form-control"
                    style={{ padding: '10px', borderRadius: '10px' }}
                  />
                </div>

                <div className="form-group mb-3">
                  <label htmlFor="dueDate" className="form-label font-weight-bold">Due Date</label>
                  <input
                    type="date"
                    name="dueDate"
                    id="dueDate"
                    value={newAssignment.dueDate}
                    onChange={handleChange}
                    className="form-control"
                    style={{ padding: '10px', borderRadius: '10px' }}
                  />
                </div>

                <button
                  type="button"
                  onClick={addAssignment}
                  className="btn btn-primary btn-block"
                  style={{ fontWeight: 'bold', padding: '12px', borderRadius: '10px', backgroundColor: '#007bff' }}
                >
                  Add Assignment
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Display Courses and Assignments */}
      <section>
        <h2 className="h4 text-center mb-4" style={{ fontWeight: 'bold', color: '#495057' }}>My Courses</h2>
        <div className="row justify-content-center">
          {courses.map(course => (
            <div key={course.id} className="col-md-6 mb-4">
              <div className="card shadow-sm p-3" style={{ borderRadius: '20px', backgroundColor: '#e9f7fe' }}>
                <h3 className="h5 font-weight-bold mb-3" style={{ color: '#343a40' }}>{course.title}</h3>
                <ul className="list-group list-group-flush">
                  {course.assignments.length > 0 ? (
                    course.assignments.map((assignment, index) => (
                      <li key={index} className="list-group-item" style={{ backgroundColor: '#f1faff' }}>
                        <strong>{assignment.title}</strong> - Due: {assignment.dueDate}
                      </li>
                    ))
                  ) : (
                    <li className="list-group-item text-muted">No assignments available for this course.</li>
                  )}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TeacherDashboard;
