import React, { useEffect, useState } from "react";

function Write({setPosts}){
  const [blog, setBlog] = useState({
    title: "",
    image: "",
    content: "",
  })

  function handleChange(event){
    setBlog(prevBlog => {
      return {
        ...prevBlog,
        [event.target.id]: event.target.value
      };
    });
  }

  function submitBlog(event){
    event.preventDefault();
    setPosts((prevPosts) => {
      return [...prevPosts, blog]
    })
  }

  useEffect(() => {
    console.log(blog);
  }, [blog])
  
  return (
    <div>
    <h1 className="newBlogHead text-center">New Blog</h1>
        <form className="text-center">
        <div className="form-group">
            <label for="exampleFormControlInput1"></label>
            <input className="form-control" onChange={handleChange} id="title" placeholder="Title" value={blog.title}/>
        </div>
        <div className="form-group">
            <label for="exampleFormControlTextarea1">textarea</label>
            <textarea className="form-control" id="content" onChange={handleChange} placeholder="Start writing a new blog..." rows="10"></textarea>
        </div>
        <button type="submit" onClick={submitBlog} class="btn btn-outline-light btn-lg submit-button">Submit</button>
        </form>
    </div>
  );
}

export default Write;
