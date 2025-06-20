import { Card, CardActionArea, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const VideoList = ({ setLoggedIn }) => {

    const [videos, setVideos] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
            try {
                const token = localStorage.getItem('token')
                const {data} = await axios.get('http://localhost:3000/video', {
                    headers: ({
                        Authorization: `Bearer ` + token
                    })
                })
                console.log(data)
                setVideos(data)
            }
            catch {
                setLoggedIn(false);
                navigate('/')
            }
        }
        fetchData();
    }, [navigate, setLoggedIn])

  return (
    <Container>
    <Grid container spacing={2} marginTop={2}>

            {videos.map((video) => {
                return <Grid item xs={12} md={4} key={video._id}>
                    <CardActionArea component="a" href="#">
                        <Card sx={{ display: 'flex' }}>
                            <CardContent sx={{ flex: 1 }}>
                                <Typography component="h2" variant="h5">
                                    <Link to={`/video/${video._id}`} style={{ textDecoration: "none", color: "black" }}>{video.title}</Link>
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary">
                                    {video.uploadDate}
                                </Typography>
                            </CardContent>
                            <CardMedia
                                component="img"
                                sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
                                image={`http://127.0.0.1:3002/${video.coverImage}`}
                                alt="alt"
                            />
                        </Card>
                    </CardActionArea>
                </Grid>
            })}
    </Grid>
</Container >
  )
}

export default VideoList