import React from 'react'
import { Routes, Route } from "react-router-dom";
import Signup from './Auth/Signup';
import Signin from './Auth/Signin';

export default function Index() {

    return (
        <div>
            <Routes>
        <Route path = '/signup' element = {<Signup/>}></Route>
        <Route path = '/' element = {<Signin/>}></Route>
            </Routes>
        </div>
    )
}