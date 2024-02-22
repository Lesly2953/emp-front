import { useEffect } from "react";
import AddEmployeeForm from "./components/AddEmployeeForm";
import DeleteEmployeeForm from "./components/DeleteEmployeeForm";
import Table from "./components/Table";
import UpdateEmployeeForm from "./components/UpdateEmployeeForm";
import { useDispatch } from "react-redux";
import { setDetails } from "./components/store";
import axios from "axios";

function App() {
  const dispatch = useDispatch();
  const api = `https://studb-bck.onrender.com/`;
  useEffect(() => {
    axios
      .get(`${api}db`)
      .then((response) => {
        console.log(response.data);
        dispatch(setDetails(response.data));
      })
      .catch((error) => {
        console.error("Error fetching employees:", error);
      });
  }, []);

  return (
    <>
      <div className="mt-10"></div>
      <AddEmployeeForm />
      <div className="mt-10"></div>
      <UpdateEmployeeForm />
      <div className="mt-10"></div>
      <DeleteEmployeeForm />
      <div className="mt-10"></div>
      <Table />
    </>
  );
}

export default App;
