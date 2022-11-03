import React, { useState } from "react";
import RecentPost from "./RecentPost";
import Post from "./Post";

function Canvas({posts}){
    return (
        <div>
        <RecentPost />
        <div className="space"></div>
        <div className="all-posts">
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