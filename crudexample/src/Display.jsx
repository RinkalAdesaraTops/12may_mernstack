import React, { memo } from 'react'

const Display = ({alldata}) => {
    console.log('display component called...');
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name:</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {alldata.map((i, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{i.name}</td>
                <td>{i.age}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  )
}

export default memo(Display)
