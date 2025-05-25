import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Signup from "./Auth/Signup";
import Signin from "./Auth/Signin";
import Header from "./Navbar/Header";
import Video from "./Video/Video";
import VideoList from "./Video/VideoList";

export default function Index(props) {
  const { isLoggedIn, setLoggedIn } = props;

 return (
    <BrowserRouter>
      <Header isLoggedIn={isLoggedIn} />
      <Routes>
        {!isLoggedIn ? (
          <>
            <Route path="/signup" element={<Signup setIsLoggedIn={setLoggedIn} />} />
            <Route path="/" element={<Signin setIsLoggedIn={setLoggedIn} isLoggedIn={isLoggedIn} />} />
            {/* Redirect all other paths to "/" when not logged in */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </>
        ) : (
          <>
            <Route path="/video/:id" element={<Video setLoggedIn={setLoggedIn} />} />
            <Route path="/video" element={<VideoList setLoggedIn={setLoggedIn} />} />
            {/* Redirect unknown paths to /video */}
            <Route path="*" element={<Navigate to="/video" replace />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}
