import React, { useState } from "react";

function Write(props){
  const [blog, setBlog] = useState({
    title: "",
    image: "",
    content: "",
  })

  function handleChange(event){
    const {name, value} = event.target;

    setBlog(prevBlog => {
      return {
        ...prevBlog,
        [name]: value
      };
    });
  }

  function submitBlog(event){
    props.onAdd(blog)
    event.preventDefault();
  }
  
  return (
    <div>
    <h1 className="newBlogHead text-center">New Blog</h1>
        <form className="text-center">
        <div className="form-group">
            <label for="exampleFormControlInput1"></label>
            <input className="form-control" onChange={handleChange} id="exampleFormControlInput1" placeholder="Title" />
        </div>
        <div className="form-group">
            <label for="exampleFormControlTextarea1">textarea</label>
            <textarea className="form-control" onChange={handleChange} placeholder="Start writing a new blog..." id="exampleFormControlTextarea1" rows="10"></textarea>
        </div>
        <button type="submit" onClick={submitBlog} class="btn btn-outline-light btn-lg submit-button">Submit</button>
        </form>
    </div>
  );
}

export default Write;
