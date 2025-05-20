import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Signup from "./Auth/Signup";
import Signin from "./Auth/Signin";
import Header from "./Navbar/Header";
import Video from "./Video/Video";
import VideoList from "./Video/VideoList";

export default function Index(props) {
  const { isLoggedIn, setLoggedIn } = props;

  return (
    <div>
      <Header isLoggedIn={isLoggedIn} />
      <BrowserRouter>
        {isLoggedIn ? (
          <Routes>
            <Route path="/video/:id" element={<Video setLoggedIn = {setLoggedIn} />} />
            <Route path="/video" element={<VideoList setLoggedIn = {setLoggedIn} />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/signup" element={<Signup setIsLoggedIn = {setLoggedIn} />} />
            <Route path="/" element={<Signin setIsLoggedIn = {setLoggedIn} isLoggedIn = {isLoggedIn}/>} />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}
