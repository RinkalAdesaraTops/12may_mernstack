import React, { useState } from "react";

const Emp = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [id, setId] = useState("");
  const [data, setData] = useState([]);
  const saveData = (e) => {
    e.preventDefault();
    if (id != "") {
      //update
      let res = data.map((i,index)=>{
                if(index==id){
                    i.name = name
                    i.age=age
                }
                return i
      })
      setData(res)
    } else {
      //insert
      setData([
        ...data,
        {
          name: name,
          age: age,
        },
      ]);
    }

    setName('')
    setAge('')
    setId('')
  };
  const delData = (id) => {
    // 1 2 3 4 5
    let res = data.filter((i, index) => index != id);
    setData(res);
  };
  const editData = (id) => {
    // 1 2 3 4 5
    let res = data.find((i, index) => index == id);
    setName(res.name);
    setAge(res.age);
    setId(id);
  };

  return (
    <div>
      <form action="#" method="post" onSubmit={saveData}>
        Name:
        <input
          type="text"
          name="name"
          id="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <br />
        <br />
        Age:
        <input
          type="number"
          name="age"
          id="age"
          onChange={(e) => setAge(e.target.value)}
          value={age}
        />
        <br />
        <br />
        <input type="submit" value="Save" />
        <br />
        <br />
      </form>
      <br />
      <br />
      <table>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Age</th>
          <th>Action</th>
        </tr>
        {data.map((i, index) => {
          return (
            <tr>
              <td>{index + 1}</td>
              <td>{i.name}</td>
              <td>{i.age}</td>
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

export default Emp;
