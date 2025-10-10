import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Apicomponent = () => {
    const [alldata,setAllData] = useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((ans)=>setAllData(ans.data))
        // fetch("https://jsonplaceholder.typicode.com/posts")
        // .then((res)=>res.json())
        // .then((ans)=>setAllData(ans))
    },[])
  return (
    <div>
      <h3>Api Example</h3>
      <table>
        <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Body</th>
        </tr>
        {
            alldata.map((i)=>{
                return (
                    <tr>
                        <td>{i.id}</td>
                        <td>{i.title}</td>
                        <td>{i.body}</td>
                    </tr>
                )
            })
        }
      </table>
    </div>
  )
}

export default Apicomponent
