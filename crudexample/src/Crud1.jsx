import React, { useCallback, useState } from "react";
import Display from "./Display";

const Crud1 = () => {
  const [data, setData] = useState({
    name: "",
    age: "",
  });
  const [alldata, setAlldata] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData({
      ...data,
      [name]: value,
    });
  };
  const saveData = useCallback((e) => {
    e.preventDefault();
    setAlldata([...alldata, data]);
  },[data])
 
  return (
    <div>
      <form action="#" onSubmit={saveData}>
        <label htmlFor="">Name:</label>
        <input
          type="text"
          name="name"
          id=""
          onChange={handleChange}
          value={data.name}
        />
        <label htmlFor="">Age:</label>
        <input
          type="number"
          name="age"
          id=""
          onChange={handleChange}
          value={data.age}
        />

        <input type="submit" value="Save" />
      </form>
      <Display alldata={alldata}/>
    </div>
  );
};

export default Crud1;
