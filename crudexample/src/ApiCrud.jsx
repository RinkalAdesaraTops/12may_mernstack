import axios from "axios";
import React, { useEffect, useState } from "react";

const ApiCrud = () => {
  const [data, setData] = useState({
    name: "",
    age: "",
    salary: "",
  });
  const [id, setId] = useState("");
  const [alldata, setAlldata] = useState([]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  const disp = () => {
    axios
      .get("http://localhost:3000/users")
      .then((res) => setAlldata(res.data));
  };
  useEffect(() => {
    disp();
  }, []);

  const saveData = (e) => {
    e.preventDefault();
    if (id != "") {
      axios
        .put("http://localhost:3000/users/"+id, data)
        .then(() => console.log("updated..."));
    } else {
      axios
        .post("http://localhost:3000/users", data)
        .then(() => console.log("Inserted..."));
    }

    disp();
    setData({
      name: "",
      age: "",
      salary: "",
    });
    setId("");
  };
  const delData = (id) => {
    axios
      .delete("http://localhost:3000/users/" + id)
      .then(() => console.log("Deleted"));
    disp();
  };
  const editData = (id) => {
    setId(id);
    axios
      .patch("http://localhost:3000/users/" + id)
      .then((res) => setData(res.data));
    // .then((res)=> {
    //   setName(res.data.name)
    //   setAge(res.data.age)
    // })
  };
  return (
    <div>
      <h3>API Crud Example</h3>
      <form action="#" method="post" onSubmit={saveData}>
        Name:
        <input
          type="text"
          name="name"
          id="name"
          onChange={handleChange}
          value={data.name}
        />
        <br />
        <br />
        Age:
        <input
          type="number"
          name="age"
          id="age"
          onChange={handleChange}
          value={data.age}
        />
        <br />
        <br />
        Salary:
        <input
          type="number"
          name="salary"
          id="salary"
          onChange={handleChange}
          value={data.salary}
        />
        <br />
        <br />
        <input type="submit" value="Save" />
        <br />
        <br />
      </form>
      <table border={"2"}>
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
          {alldata.map((i) => {
            return (
              <tr>
                <td>{i.id}</td>
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

export default ApiCrud;
