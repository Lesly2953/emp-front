import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from 'react-redux'
import { setDetails } from "./store";

const AddEmployeeForm = () => {
  const api = `https://studb-bck.onrender.com/`;
  const dispatch = useDispatch()

  const [empid, setEmpId] = useState("");
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [doj, setDoj] = useState("");
  const [sect, setSect] = useState("");
  const [role, setRole] = useState("");
  const [income, setIncome] = useState("");
  const [address, setAddress] = useState("");

  const fetch = () => {
    axios
      .get(`${api}db`)
      .then((response) => {
        console.log(response.data);
        dispatch(setDetails(response.data));
      })
      .catch((error) => {
        console.error("Error fetching employees:", error);
      });
  }

  const addEmployee = (employeeData) => {
    axios
      .post(`${api}add`, employeeData)
      .then((response) => {
        console.log("Employee added successfully:", response.data);
        fetch();
      })
      .catch((error) => {
        console.error("Error adding employee:", error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEmployee = {
      empid,
      name,
      dob,
      gender,
      doj,
      sect,
      role,
      income,
      address,
    };

    addEmployee(newEmployee);

    setEmpId("");
    setName("");
    setDob("");
    setGender("");
    setDoj("");
    setSect("");
    setRole("");
    setIncome("");
    setAddress("");
  };

  const styles = {
    container: {
      maxWidth: '400px',
      margin: 'auto',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
    },
    input: {
      marginBottom: '10px',
      padding: '8px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      fontSize: '16px',
    },
    button: {
      padding: '10px',
      backgroundColor: '#4caf50',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '16px',
    },
    buttonHover: {
      backgroundColor: '#45a049',
    },
  };

  return (
    <div style={styles.container}>
      <h1 className="text-3xl font-bold mb-4">Add Student</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Student ID"
          value={empid}
          onChange={(e) => setEmpId(e.target.value)}
          style={styles.input}
        />
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
        />
        <input
          type="text"
          placeholder="Date of Birth"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          style={styles.input}
        />
        <input
          type="text"
          placeholder="Gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          style={styles.input}
        />
        <input
          type="text"
          placeholder="Date of Joining"
          value={doj}
          onChange={(e) => setDoj(e.target.value)}
          style={styles.input}
        />
        <input
          type="text"
          placeholder="Dept"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          style={styles.input}
        />
        <input
          type="number"
          placeholder="CGPA"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
          style={styles.input}
        />
        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          style={styles.input}
        />
        <button
          className="btn"
          type="submit"
          style={styles.button}
          onMouseOver={(e) => e.target.style.backgroundColor = styles.buttonHover.backgroundColor}
          onMouseOut={(e) => e.target.style.backgroundColor = styles.button.backgroundColor}
        >
          Add Student
        </button>
      </form>
    </div>
  );
};

export default AddEmployeeForm;
