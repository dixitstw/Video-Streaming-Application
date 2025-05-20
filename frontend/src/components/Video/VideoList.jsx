import { Card, CardActionArea, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const VideoList = () => {

    const [videos, setVideos] = useState([])
    const navigate = useNavigate();

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
            <p>No videos available here.</p>
    </Grid>
</Container >
  )
}

export default VideoList