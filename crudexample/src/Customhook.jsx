import React, { useEffect, useState } from 'react'
import useFetchApi from './useFetchApi'

const Customhook = () => {
    // const [post,setPost] = useState([])
    // const [user,setUser] = useState([]) 
    const [post] = useFetchApi("https://jsonplaceholder.typicode.com/posts")
    const [user] = useFetchApi("https://jsonplaceholder.typicode.com/users")
    // useEffect(()=>{
    //     fetch("https://jsonplaceholder.typicode.com/posts")
    //         .then((res)=>res.json())
    //         .then((data)=>setPost(data))
    //     fetch("https://jsonplaceholder.typicode.com/users")
    //         .then((res)=>res.json())
    //         .then((data)=>setUser(data))
    // },[])
  return (
    <div>
      <h3>Post Detail</h3>
      <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Body</th>
            </tr>
        </thead>
        <tbody>
            {
                post.map((i)=>{
                    return (
                        <tr>
                            <td>{i.id}</td>
                            <td>{i.title}</td>
                            <td>{i.body}</td>
                        </tr>
                    )
                })
            }
        </tbody>
      </table>
      <hr />
      <h3>User Detail</h3>
      <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
            </tr>
        </thead>
        <tbody>
            {
                user.map((i)=>{
                    return (
                        <tr>
                            <td>{i.id}</td>
                            <td>{i.name}</td>
                            <td>{i.email}</td>
                            <td>{i.phone}</td>
                        </tr>
                    )
                })
            }
        </tbody>
      </table>
    </div>
  )
}

export default Customhook
