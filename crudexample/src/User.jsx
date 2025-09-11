import React, { useState } from "react";

const User = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [salary, setSalary] = useState("");
  const [id, setId] = useState("");
  const [alldata, setAllData] = useState([]);
  const changeName = (e) => {
    setName(e.target.value);
  };
  const saveData = (e) => {
    e.preventDefault();
    if (id != "") {
      //update
      let res = alldata.map((i,index)=>{
                if(index == id){
                    i.name = name
                    i.age = age
                    i.salary = salary
                } 
                return i 
      })
      setAllData(res)
    } else {
      //insert
      setAllData([
        ...alldata,
        {
          name: name,
          age: age,
          salary: salary,
        },
      ]);
    }
    setId('')
    setName('')
    setAge('')
    setSalary('')
  };
  const delData = (id) => {
    //1 2 3  5
    let data = alldata.filter((i, index) => {
      return index != id;
    });
    setAllData(data);
  };
  const editData = (id) => {
    let res = alldata.find((i, index) => index == id);
    setName(res.name);
    setAge(res.age);
    setSalary(res.salary);
    setId(id);
  };
  return (
    <div>
      <form action="#" method="post" onSubmit={saveData}>
        <label htmlFor="">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={changeName}
          value={name}
        />
        <br />
        <br />
        <label htmlFor="">Age:</label>
        <input
          type="number"
          name="age"
          id="age"
          onChange={(e) => setAge(e.target.value)}
          value={age}
        />
        <br />
        <br />
        <label htmlFor="">Salary:</label>
        <input
          type="number"
          name="salary"
          id="salary"
          onChange={(e) => setSalary(e.target.value)}
          value={salary}
        />
        <br />
        <br />
        <input type="submit" value="Save" />
      </form>
      <br />
      <br />
      <table border={"2"}>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Age</th>
          <th>Salary</th>
          <th>Action</th>
        </tr>
        {alldata.map((i, index) => {
          return (
            <tr>
              <td>{index + 1}</td>
              <td>{i.name}</td>
              <td>{i.age}</td>
              <td>{i.salary}</td>
              <td>
                <button onClick={() => editData(index)}>Edit</button>
                <button onClick={() => delData(index)}>Delete</button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default User;
