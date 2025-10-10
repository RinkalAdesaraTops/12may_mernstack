import React, { useState } from "react";

const CrudComponent = () => {
  const [alldata, setAllData] = useState([]);
  const [id, setId] = useState("");
  const [data, setData] = useState({
    name: "",
    age: "",
    salary: "",
  });
  const handleChange = (e) => {
    // let arr = [10,20,30,40,50]
    // let [a,b,...c] = arr
    // let obj = {
    //     "id":101,
    //     "name":"fsdgf",
    //     "age":23
    // }
    // let {id,name} = obj
    // let nm = e.target.name
    // let vl = e.target.value
    let { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
      // [nm]:vl
    });
  };
  const saveData = (e) => {
    e.preventDefault();
    if (id != "") {
         let res = alldata.map((i,index)=>{
                if(index==id){
                    i = data
                }
                return i
         })
         setAllData
    } else {
      setAllData([...alldata, data]);
    }

    setId("");
    setData({
      name: "",
      age: "",
      salary: "",
    });
  };
  const delData = (id) => {
    // alldata.splice(id,1)
    // console.log(alldata);
    // let res = alldata.map((i)=>i)
    let res = alldata.filter((i, index) => index != id);
    setAllData(res);
  };
  const editData = (id) => {
    let res = alldata.find((i, index) => index == id);
    setData(res);
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
                  <button onClick={() => editData(index)}>Edit</button>
                  <button onClick={() => delData(index)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CrudComponent;
