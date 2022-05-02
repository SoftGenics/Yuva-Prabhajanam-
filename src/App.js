import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./Components/Pages/Home";
import Submit from "./Components/Pages/Submit";
function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/submit" element={<Submit />} />
    </Routes>
    </BrowserRouter> 
    </div>
  );
}

export default App;
