//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";
import dummyData from "../../dummy-data"
// import data 

const PostsPage = () => {
  // set up state for your data
  const [postData] = useState(dummyData)
  console.log(postData);
  return (
    <div className="posts-container-wrapper">
      {postData.map(d => (<Post  post={d} />))}
    </div>
  );
};

export default PostsPage;

