import React, { useState } from "react";
import RecentPost from "./RecentPost";
import posts from "../posts";
import Post from "./Post";

function Canvas(){

    const [blog, setBlog] = useState([]);
    function addBlog(blog) {
        setBlog(prevBlog => {
            return [...prevBlog, blog];
        });
        console.log(blog);
    }

    return (
        <div>
        <RecentPost />
        <div className="space"></div>
        <div className="all-posts">
        {blog.map(post => {
                        return <Post title={post.title} content={post.content} />;
               })}
        {posts.map(props => (
            <Post
            key={props.key}
            title={props.title}
            image={props.image}
            content={props.content}
        />
        ))}
        </div>
        </div>
    )
}

export default Canvas;