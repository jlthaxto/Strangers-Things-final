


import React, { useState } from "react";
import { createPost } from "../api";


const Createpost = ({ token, fetchPosts, navigate }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [willDeliver, setWillDeliver] = useState(false);
  const newPost = {
    title,
    description,
    price,
    location,
    willDeliver,
  };
  async function addPost() {
    const results = await createPost(token, newPost);
    fetchPosts();
    navigate(`/posts`);
  }
  return (
    
      <form
        onSubmit={(event) => {
          event.preventDefault();
          addPost();
        }}
      >
        <div className="loginTemplate">
          
          <h1>Create A New Post</h1>
          <input
            type="text"
            placeholder="Title*"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <input
            type="text"
            placeholder="Description*"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
          <input
            type="text"
            placeholder="Price*"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />
          <input
            type="text"
            placeholder="Location*"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
          />

        


      <button type="submit" onClick={() =>{ 
      CreatePost(token,postID);
      }}>       
      Create A Post</button>
        </div>

        {/* <label>Will Deliver</label>
            <input
              type="checkbox"
              placeholder="Will Deliver*"
              checked={willDeliver}
              onChange={(event) => setWillDeliver(!willDeliver)}
            /> */}
      </form>
    
  );
};
export default Createpost;

