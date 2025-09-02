import React from 'react'
import { Box,Grid,Typography } from '@mui/material'
import {Delete,DeleteForever,DeleteOutlined,DeleteRounded,ThreeSixty,FourK ,ThreeDRotation  ,DeleteForeverSharp  ,DeleteForeverTwoTone  ,DeleteForeverOutlined ,DeleteForeverRounded ,DeleteTwoTone ,DeleteSharp  } from '@mui/icons-material'

const Material2 = () => {
  return (
    <div>
       <Box sx={{ flexGrow: 1 }}>
      <Grid container sx={{ color: 'text.primary' }}>
        <Grid size={4}>
          <Typography>Filled</Typography>
        </Grid>
        <Grid size={8}>
          <Delete />
          <DeleteForever />
        </Grid>
        <Grid size={4}>
          <Typography>Outlined</Typography>
        </Grid>
        <Grid size={8}>
          <DeleteOutlined />
          <DeleteForeverOutlined  />
        </Grid>
        <Grid size={4}>
          <Typography>Rounded</Typography>
        </Grid>
        <Grid size={8}>
          <DeleteRounded />
          <DeleteForeverRounded  />
        </Grid>
        <Grid size={4}>
          <Typography>Two Tone</Typography>
        </Grid>
        <Grid size={8}>
          <DeleteTwoTone  />
          <DeleteForeverTwoTone  />
        </Grid>
        <Grid size={4}>
          <Typography>Sharp</Typography>
        </Grid>
        <Grid size={8}>
          <DeleteSharp  />
          <DeleteForeverSharp  />
        </Grid>
        <Grid size={4}>
          <Typography>Edge-cases</Typography>
        </Grid>
        <Grid size={8}>
          <ThreeDRotation  />
          <FourK />
          <ThreeSixty />
        </Grid>
      </Grid>
    </Box>
    </div>
  )
}

export default Material2
