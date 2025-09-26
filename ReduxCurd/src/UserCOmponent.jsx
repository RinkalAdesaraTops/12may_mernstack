import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { delFunc, insFunc } from './reduxcrud/UserAction';

const UserCOmponent = () => {
   const [data, setData] = useState({
    name: "",
    age: "",
  });
  const alldata = useSelector((state)=>state.data)
  const dispatch = useDispatch()

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData({
      ...data,
      [name]: value,
    });
  };
  const saveData = (e)=>{
    e.preventDefault()
    dispatch(insFunc(data))
    setData({
      name:"",
      age:""
    })
  }
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
        /> <br /><br />
        <label htmlFor="">Age:</label>
        <input
          type="number"
          name="age"
          id=""
          onChange={handleChange}
          value={data.age}
        /><br /><br />

        <input type="submit" value="Save" />
        <br /><br />
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
                <td><button onClick={()=>dispatch(delFunc(index))}>Delete</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  )
}

export default UserCOmponent
