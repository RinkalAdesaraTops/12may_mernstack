import React, { useCallback, useState } from 'react'
import Display from './Display'

const CallbackExample = () => {
    const [name,setName] = useState('')
    const [alldata,setAlldata] = useState([])
    const saveData = useCallback((e)=>{
        e.preventDefault()
        setAlldata([
            ...alldata,
            {
                name:name
            }
        ])
    },[name])
  return (
    <div>
      <form action="#" name='frm' method='post' onSubmit={saveData}>
        <label htmlFor="">Name:</label>
        <input type="text" name="name" id="name" onChange={(e)=>setName(e.target.value)} value={name} />
        <input type="submit" value="Save" />
      </form>
      <Display alldata={alldata}/>

    </div>
  )
}

export default CallbackExample
