import React from "react";

function Post(props) {
  return (
    <div className="post">
        <h1 className="text-center postName">Qafira</h1>
        <div class="crop"><img className="post-image" src={props.image}></img></div>
      <p>{props.content}</p>
    </div>
  );
}

export default Post;
