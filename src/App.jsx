import React from "react";


import "./App.css";
import Moviebooking from "./component/Moviebooking";


import Moviedetail from "./component/Moviedetail";
import { BrowserRouter, Route, Routes } from "react-router-dom";


const App = () => {
  return (
    <>
    
     <div className="app">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Moviebooking/>}/>
        <Route path="/detail/:id" element={<Moviedetail/>}/>
      </Routes>
      
      </BrowserRouter>

     </div>
    </>
  );
};

export default App;
