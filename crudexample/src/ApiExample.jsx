import axios from "axios";
import React, { useEffect, useState } from "react";

const ApiExample = () => {
    const [prodData,setProdData]=useState([])
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
        .then((res)=>setProdData(res.data))
        
    // fetch("https://fakestoreapi.com/products")
    //   .then((response) => response.json())
    //   .then((data) => setProdData(data));
  }, []);
  return ( 
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                        {
                            prodData.map((i)=>{
                                return (
                                    <tr>
                                        <td>{i.id}</td>
                                        <td><img src={i.image} height={'50px'} width={'40px'}/></td>
                                        <td>{i.title}</td>
                                        <td>{i.category}</td>
                                        <td>{i.price}</td>
                                    </tr>
                                )
                            })
                        }
                </tbody>
            </table>
        </div>
  );
};

export default ApiExample;
