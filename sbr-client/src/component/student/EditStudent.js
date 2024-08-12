import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';

const EditStudent = () => {
  
  const navigate = useNavigate();
  const { id } = useParams();

  const [student, setStudent] = useState({
    firstName: "",
    lastName: "",
    email: "",
    department: ""
  });


  useEffect(() => {
    loadStudent();
  }, []);

  const loadStudent = async () => {
    try {
      const result = await axios.get(`http://localhost:8080/students/student/${id}`);
      setStudent(result.data);
      console.log("Student data loaded:", result.data); // Log student data
    } catch (error) {
      console.error("There was an error loading the student data!", error);
    }
  };

  const handleInputChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value
    });
  };

  const updateStudent = async (e) => {
    e.preventDefault();
    try {
      console.log("Updating student:", student); // Log before updating
      const response = await axios.put(`http://localhost:8080/students/${id}`, student);
      console.log("Student updated successfully:", response.data); // Log success
      navigate("/view-students");
    } catch (error) {
      console.error("There was an error updating the student data!", error);
      if (error.response) {
        console.error("Data:", error.response.data);
        console.error("Status:", error.response.status);
        console.error("Headers:", error.response.headers);
      } else if (error.request) {
        console.error("Request:", error.request);
      } else {
        console.error("Error Message:", error.message);
      }
    }
  };

  return (
    <div className="col-sm-8 py-2 px-5 offset-2 shadow">
      <h2 className="mt-5">Edit Student</h2>
      <form onSubmit={updateStudent}>
        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="firstName">First Name</label>
          <input
            className="form-control col-sm-6"
            type="text"
            name="firstName"
            id="firstName"
            required
            value={student.firstName}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="lastName">Last Name</label>
          <input
            className="form-control col-sm-6"
            type="text"
            name="lastName"
            id="lastName"
            required
            value={student.lastName}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="email">Email</label>
          <input
            className="form-control col-sm-6"
            type="email"
            name="email"
            id="email"
            required
            value={student.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="department">Department</label>
          <input
            className="form-control col-sm-6"
            type="text"
            name="department"
            id="department"
            required
            value={student.department}
            onChange={handleInputChange}
          />
        </div>
        <div className="row mb-5">
          <div className="col-sm-2">
            <button type="submit" className="btn btn-outline-success btn-lg">Save</button>
          </div>
          <div className="col-sm-2">
            <Link to="/view-students" className="btn btn-outline-warning btn-lg">Cancel</Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditStudent;