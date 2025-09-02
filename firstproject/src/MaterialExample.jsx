import React from 'react'
import { Button,Checkbox  } from '@mui/material'
const MaterialExample = () => {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  return (
    <div>
      <h3>Material UI Example</h3>
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>

        <Checkbox  defaultChecked />abc
      <Checkbox  />xyz
      <Checkbox />fghfgh
      <Checkbox />fghfgh
      <Checkbox />fghfgh
      <Checkbox />test
    </div>
  )
}
export default MaterialExample
