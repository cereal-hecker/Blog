import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Canvas from "./Canvas";
import leagcyPosts from "../posts";
import Write from "./Write";
import Navbar from "./Navbar";

function App(){

  const [posts, setPosts] = useState([...leagcyPosts])
  
      return (      
         <BrowserRouter>
          <div>
            <Navbar />
            <Routes>
               <Route path="/" element={<Canvas posts={posts}/>}/>
               <Route path="/write" element={<Write setPosts={setPosts}/>}/>
            </Routes>
          </div> 
        </BrowserRouter>
      );
  }
   
  export default App;

