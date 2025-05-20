import React from 'react'
import { Routes, Route } from "react-router-dom";
import Signup from './Auth/Signup';
import Signin from './Auth/Signin';
import Header from './Navbar/Header';
import Video from './Video/Video';
import VideoList from './Video/VideoList';

export default function Index() {

    return (
        <div>
            <Routes>
        <Route path = '/signup' element = {<Signup/>}></Route>
        <Route path = '/' element = {<Signin/>}></Route>
        <Route path = '/header' element = {<Header/>}></Route>
        <Route path = '/video/:id' element = {<Video/>}></Route>
        <Route path = '/video' element = {<VideoList/>}></Route>
            </Routes>
        </div>
    )
}