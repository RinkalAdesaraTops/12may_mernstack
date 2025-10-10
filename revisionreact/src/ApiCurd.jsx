import React, { useEffect, useState } from "react";
import axios from "axios";

const ApiCurd = () => {
  const [alldata, setAllData] = useState([]);
  const [id, setId] = useState("");
  const [data, setData] = useState({
    name: "",
    age: "",
    salary: "",
  });
  const handleChange = (e) => {
    let { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  const saveData = (e) => {
    e.preventDefault();

    if (id != "") {
      axios
        .put("http://localhost:3000/users/"+id, data)
        .then(() => console.log("updated..."));
    } else {
      axios
        .post("http://localhost:3000/users", data)
        .then(() => console.log("inserted..."));
    }

    disp();
    setId("");
    setData({
      name: "",
      age: "",
      salary: "",
    });
  };

  const disp = () => {
    axios
      .get("http://localhost:3000/users")
      .then((res) => setAllData(res.data));
  };
  useEffect(() => {
    disp();
  }, []);
  const delData = (id) => {
    axios
      .delete("http://localhost:3000/users/" + id)
      .then(() => console.log("deleted..."));
    disp();
  };

  const editData = (id) => {
    setId(id);
    axios
      .patch("http://localhost:3000/users/" + id)
      .then((res) => setData(res.data));
  };
  return (
    <div>
      <form action="#" method="post" onSubmit={saveData}>
        <label htmlFor="">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={handleChange}
          value={data.name}
        />
        <br />
        <br />
        <label htmlFor="">Age:</label>
        <input
          type="number"
          name="age"
          id="age"
          onChange={handleChange}
          value={data.age}
        />
        <br />
        <br />
        <label htmlFor="">Salary:</label>
        <input
          type="number"
          name="salary"
          id="salary"
          onChange={handleChange}
          value={data.salary}
        />
        <br />
        <br />
        <input type="submit" value="SaveData" />
        <br />
        <br />
      </form>
      <br />
      <br />
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Salary</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {alldata.map((i, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{i.name}</td>
                <td>{i.age}</td>
                <td>{i.salary}</td>
                <td>
                  <button onClick={() => editData(i.id)}>Edit</button>
                  <button onClick={() => delData(i.id)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ApiCurd;
