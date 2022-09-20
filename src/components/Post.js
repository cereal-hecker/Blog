import React from "react";

function Post(props) {
  return (
    <div className="post">
        <h1 className="text-center postName">{props.title}</h1>
        <div className="crop"><img className="post-image" src={props.image}></img></div>
      <p>{props.content}</p>
      <div className="button-div">
      </div>
    </div>
  );
}

export default Post;
