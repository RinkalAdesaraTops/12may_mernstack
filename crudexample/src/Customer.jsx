import { useState } from "react";

const Customer = () => {
  const [data, setData] = useState({
    name: "",
    age: "",
  });
  const [id, setId] = useState("");
  const [alldata, setAlldata] = useState([]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    // let val = e.target.value
    // let nm = e.target.name
    setData({
      ...data,
      [name]: value,
    });
  };
  const saveData = (e) => {
    e.preventDefault();
    if (id != "") {
        let res = alldata.map((i,index)=>{
                if(index == id){
                    i = data
                }
                return i
        })
        setAlldata(res)
    } else {
      setAlldata([...alldata, data]);
    }
    setId('')
    setData({
        name:"",
        age:''
    })
  };
  const delData = (id) => {
    let res = alldata.filter((i, index) => index != id);
    setAlldata(res);
  };
  const editData = (id) => {
    let res = alldata.find((i, index) => index == id);
    setData(res);
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
        <input type="submit" value="Save Data" />
        <br />
        <br />
      </form>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
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

export default Customer;
