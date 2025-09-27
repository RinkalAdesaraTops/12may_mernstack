import React,{useState} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { del, ins, upd } from './RTKCrud/RtkUserReducer';

const RtkUserCrud = () => {
    const [data, setData] = useState({
    name: "",
    age: "",
  });
  const alldata = useSelector((state) => state.User.data);
  const [id, setId] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData({
      ...data,
      [name]: value,
    });
  };
  const saveData = (e) => {
    e.preventDefault();
    if (id != "") {
      //update
      
      dispatch(upd({id,data}))
    } else {
      //insert
      dispatch(ins(data));
    }
    setData({
      name: "",
      age: "",
    });
    setId("");
  };

  const editData = (id) => {
    setId(id);
    let res = alldata.find((i, index) => index == id);
    setData(res);
  };
  return (
    <div>
      <form action="#" method="post" onSubmit={saveData}>
              <label htmlFor="">Name:</label>
              <input
                type="text"
                name="name"
                id=""
                onChange={handleChange}
                value={data.name}
              />{" "}
              <br />
              <br />
              <label htmlFor="">Age:</label>
              <input
                type="number"
                name="age"
                id=""
                onChange={handleChange}
                value={data.age}
              />
              <br />
              <br />
              <input type="submit" value="Save" />
              <br />
              <br />
            </form>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name:</th>
                  <th>Age</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {alldata.map((i, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{i.name}</td>
                      <td>{i.age}</td>
                      <td>
                        <button onClick={() => editData(index)}>Edit</button>
                        <button onClick={() => dispatch(del(index))}> 
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
    </div>
  )
}

export default RtkUserCrud
