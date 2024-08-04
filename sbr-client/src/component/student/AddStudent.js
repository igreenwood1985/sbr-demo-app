import React, { useState } from 'react'
import { Link, useNavigate} from 'react-router-dom';
import axios from 'axios';

const AddStudent = () => {

  const navigate = useNavigate();

  const[student, setStudents] = useState({
    firstName : '', 
    lastName : '', 
    email : '', 
    department : ''
  });

  const{firstName, lastName, email, department} = student;

  const handleInputChange = (e) => {
    setStudents({
        ...student, 
        [e.target.name]: e.target.value});
  };
const saveStudent = async(e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/students", student);
    navigate("/view-students")
};


  return (
    <div className="col-sm-8 py-2 px-5">
      <form onSubmit={saveStudent}>
        <div className="input-group mb-5">
            <lable
            className="input-group-text"
            htmlFor="firstName"
            >First Name
            </lable>
            <input
            className="form-control col-sm-6"
            type="text"
            name="firstName"
            id="firstName"
            required
            value={firstName}
            onChange={handleInputChange}
            />
        </div>
        <div className="input-group mb-5">
            <lable
            className="input-group-text"
            htmlFor="lastName"
            >Last Name
            </lable>
            <input
            className="form-control col-sm-6"
            type="text"
            name="lastName"
            id="lastName"
            required
            value={lastName}
            onChange={handleInputChange}
            />
        </div>
        <div className="input-group mb-5">
            <lable
            className="input-group-text"
            htmlFor="email"
            >Email
            </lable>
            <input
            className="form-control col-sm-6"
            type="email"
            name="email"
            id="email"
            required
            value={email}
            onChange={handleInputChange}
            />
        </div>
        <div className="input-group mb-5">
            <lable
            className="input-group-text"
            htmlFor="department"
            >Department
            </lable>
            <input
            className="form-control col-sm-6"
            type="text"
            name="department"
            id="department"
            required
            value={department}
            onChange={handleInputChange}
            />
        </div>
        <div className='row mb-5'>
            <div className="col-sm-2">
            <button
                type="submit"
                className="btn btn-outline-success btn-lg">
                Save
            </button>
        </div>
        <div className="col-sm-2">
            <Link to="/view-students"
                type="submit"
                className="btn btn-outline-warning btn-lg">
                Cancel
            </Link>
        </div>
      </div>
      </form>
    </div>
  )
}

export default AddStudent

