import React, { useState } from "react";
import Post from "./Post";

function Write(props) {
//   const [note, setNote] = useState({
//     title: "",
//     content: ""
//   });

//   function handleChange(event) {
//     const { name, value } = event.target;

//     setNote(prevNote => {
//       return {
//         ...prevNote,
//         [name]: value
//       };
//     });
//   }

//   function submitNote(event) {
//     props.onAdd(note);
//     setNote({
//       title: "",
//       content: ""
//     });
//     event.preventDefault();
//   }

  return (
    <div>
    <h1 class="newBlogHead text-center">New Blog</h1>
        <form className="text-center">
        <div class="form-group">
            <label for="exampleFormControlInput1">Email address</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email ID" />
        </div>
        <div class="form-group">
            <label for="exampleFormControlTextarea1">Example textarea</label>
            <textarea class="form-control" placeholder="Start writing a new blog..." id="exampleFormControlTextarea1" rows="15"></textarea>
        </div>
        </form>
    </div>
  );
}

export default Write;
