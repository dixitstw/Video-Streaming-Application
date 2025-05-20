import { Card, CardActionArea, CardContent, Container, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../Navbar/Header';

const Video = () => {

    const { id } = useParams();
    const navigate = useNavigate()
    const [videoId] = useState(id);
    const [videoInfo, setVideoInfo] = React.useState([]);


  return (

    <Container>
    <Grid item xs={12} md={12} marginTop={2}>
        <CardActionArea component="a" href="#">
            <Card sx={{ display: 'flex' }}>
                <CardContent sx={{ flex: 1 }}>
                    <video autoPlay controls width='200'>
                        <source src={`http://localhost:3000/video/${videoId}`} type='video/mp4' />
                    </video>
                </CardContent>
            </Card>
        </CardActionArea>
    </Grid>
    <Grid container spacing={2} marginTop={2}>
        <Grid item xs={12} md={6}>
            <Typography variant="subtitle1" color="primary">
                Created by:{videoInfo.createdBy?.fullname}
            </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
            <Typography variant="subtitle1" color="primary">
                Created: {videoInfo.uploadDate}
            </Typography>
        </Grid>
        <Grid item xs={12} md={12}>
            <Typography variant="h5">
                {videoInfo.title}
            </Typography>
        </Grid>
    </Grid>
</Container>
  )
}

export default Video