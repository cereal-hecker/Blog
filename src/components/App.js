import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Canvas from "./Canvas";
import Write from "./Write";
import Navbar from "./Navbar";

function App(){

      return (      
         <BrowserRouter>
          <div>
            <Navbar />
            <Routes>
               <Route path="/" element={<Canvas/>}/>
               <Route path="/write" element={<Write/>}/>
               
            </Routes>
          </div> 
        </BrowserRouter>
      );
  }
   
  export default App;

