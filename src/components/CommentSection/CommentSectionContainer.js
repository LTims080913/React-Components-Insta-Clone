// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  const [comments, setComments] = useState(props.comments)
  console.log(comments)
  // remove from here to fix



  // const [newComments, setNewComments] = useState([ ])
  // const [query, setQuery] = useState("")
  
  // const handleClick = () => {
  //   setNewComments(newComments => [...newComments, query])
  // }
  
  // const updateQuery = ({ target }) => {
  //    setQuery(target.value)
  // }
  // const keyPressed = ({ key }) => {
  //   if(key === "Enter") {
  //   handleClick()
  //   }
  // }
  // const submitHandler = e => {
  //   e.preventDefault()
  // }
  // const add = ({ query }) => <li>{query}</li>
  // const newQuery = {username: 'Ltims', text: query}


  //remove up till here to fix 
  return (
    <div>
      {newComments.map((query, i) => (<Comment comment={newQuery} key={i}/>))}
      {comments.map((t, i) => (<Comment key={i} comment={t}/>))}
      <CommentInput/>
      {/* submitComment= {submitComment} */}
      
    </div>
  );
};

export default CommentSection;
