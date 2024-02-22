import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setDetails } from "./store";

const DeleteEmployeeForm = () => {
  const [empid, setEmpId] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    deleteEmployee(empid);
    setEmpId("");
  };

  const api = `https://studb-bck.onrender.com/`;

  const fetch = () => {
    axios
      .get(`${api}db`)
      .then((response) => {
        dispatch(setDetails(response.data));
      })
      .catch((error) => {
        console.error("Error fetching employees:", error);
      });
  };

  const deleteEmployee = (empid) => {
    axios
      .post(`${api}delete`, { empid: empid })
      .then((response) => {
        console.log("Employee deleted successfully:", response.data);
        fetch();
      })
      .catch((error) => {
        console.error("Error deleting employee:", error);
      });
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
      background: 'linear-gradient(to right, #ff4d4d, #ff1a1a)',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '16px',
    },
    buttonHover: {
      background: 'linear-gradient(to right, #ff1a1a, #ff4d4d)',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={{ fontSize: '24px', marginBottom: '20px', textAlign: 'center' }}>Delete Student</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Student ID"
          value={empid}
          onChange={(e) => setEmpId(e.target.value)}
          style={styles.input}
        />
        <button
          type="submit"
          style={styles.button}
          onMouseOver={(e) => e.target.style.background = styles.buttonHover.background}
          onMouseOut={(e) => e.target.style.background = styles.button.background}
        >
          Delete Student
        </button>
      </form>
    </div>
  );
};

export default DeleteEmployeeForm;
