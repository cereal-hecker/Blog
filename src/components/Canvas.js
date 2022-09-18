import React from "react";
import RecentPost from "./RecentPost";
import posts from "../posts";
import Post from "./Post";

function Canvas(){
    return (
        <div>
        <RecentPost />
        <div className="space"></div>
        <div class="all-posts">
        {posts.map(props => (
            <Post
            key={props.key}
            image={props.image}
            content={props.content}
        />
        ))}
        </div>
        </div>
    )
}

export default Canvas;