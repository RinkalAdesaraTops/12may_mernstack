import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  addDoc,
  collection,
  query,
  onSnapshot,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "./firebase";

function App() {
  const [data, setData] = useState({
    name: "",
    age: "",
    salary: "",
  });
  const [id, setId] = useState("");
  const [allData, setAllData] = useState([]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  const saveData = async (e) => {
    e.preventDefault();
    if (id != "") {
      let res = await updateDoc(doc(db,"userinfo",id),data)
    } else {
      let res = await addDoc(collection(db, "userinfo"), data);
    }
    setData({
      name: "",
      age: "",
      salary: "",
    });
    setId("");
  };
  useEffect(() => {
    const q = query(collection(db, "userinfo"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let todosArray = [];
      querySnapshot.forEach((doc) => {
        todosArray.push({ ...doc.data(), id: doc.id });
      });
      setAllData(todosArray);
      /*
      {id:dfsdf, name:"sdfsd",age:23, salary:w343}
      */
    });
    return () => unsub();
  }, []);
  const delData = async (id) => {
    let res = await deleteDoc(doc(db, "userinfo", id));
  };
  const editData = async (id) => {
    let res = await getDoc(doc(db, "userinfo", id));
    // console.log(res.data());
    setId(id);
    setData(res.data());
  };
  return (
    <>
      <h3>Firebase Example</h3>
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
          <label htmlFor="">Salary:</label>
          <input
            type="number"
            name="salary"
            id=""
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
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Salary</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allData.map((i, index) => {
              return (
                <tr key={index}>
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
    </>
  );
}

export default App;
