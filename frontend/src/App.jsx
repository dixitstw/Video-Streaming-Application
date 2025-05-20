import { BrowserRouter } from "react-router-dom";
import Index from "./components/Index"
import { useState } from "react";

function App() {

  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
  <Index isLoggedIn = {isLoggedIn} setLoggedIn = {setLoggedIn}/>
  )
}

export default App;
