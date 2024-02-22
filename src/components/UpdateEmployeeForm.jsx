import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from 'react-redux'
import { setDetails } from "./store";

const UpdateEmployeeForm = () => {
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
  };

  const updateEmployee = (employeeData) => {
    axios
      .post(`${api}update`, employeeData)
      .then((response) => {
        console.log("Employee updated successfully:", response.data);
        fetch()
      })
      .catch((error) => {
        console.error("Error updating employee:", error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedEmployee = {
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

    updateEmployee(updatedEmployee);

    // onUpdateEmployee(updatedEmployee);
    // Reset form fields after submission
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
      padding: '20px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      borderRadius: '8px',
      background: '#f7f7f7',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
    },
    input: {
      marginBottom: '15px',
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      fontSize: '16px',
    },
    button: {
      padding: '12px',
      background: 'linear-gradient(to right, #3399ff, #0066cc)',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '16px',
    },
    buttonHover: {
      background: 'linear-gradient(to right, #0066cc, #3399ff)',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={{ fontSize: '24px', marginBottom: '20px', textAlign: 'center' }}>Update Student</h1>
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
        {/* Repeat similar style prop for other input fields */}
        <button
          type="submit"
          style={styles.button}
          onMouseOver={(e) => e.target.style.background = styles.buttonHover.background}
          onMouseOut={(e) => e.target.style.background = styles.button.background}
        >
          Update Student
        </button>
      </form>
    </div>
  );
};

export default UpdateEmployeeForm;
