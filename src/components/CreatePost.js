
// import React, { useState } from 'react';
// import { createPost } from '../api';


// const CreatePost = ({ token, fetchPosts, navigate  }) => {

//   const [newTitle, setNewTitle] = useState(title);
//   const [newDescription, setNewDesc] = useState(description);
//   const [newLocation, setNewLocation] = useState(location);
//   const [newPrice, setNewPrice] = useState(price);
//   const [newWillDeliver, setNewWillDeliver] = useState(willDeliver);
  

//   const newPost = {
//     title: 'Jasons new new post',
//     description: 'testing 9/10',
//     price: 'free',
//     location: 'NY',
//     willDeliver: false
//   }
  
//   async function addPost() {
//     const results = await createPost(token, newPost)
//     fetchPosts();
//     navigate(`/posts`)
//   }
//   async function createPost() {
//     const createdPost = {
//       token: token,
//       title: newTitle,
//       description: newDescription,
//       location: newLocation,
//       price: newPrice,
//       willDeliver: newWillDeliver,
//       _id: postID
//     }
//     await createPost(createdPost)
//   }
  
  
//   return (
//     <form className='editForm' onSubmit={ (ev) => {
//       ev.preventDefault();
//       createPost();
      
//     }}>
//       <input className='editTitle'
//         type='text'
//         placeholder={title}
//         onChange={(ev) => setNewTitle(ev.target.value)}
//       />
    
     

//       <input className='editDescription'
//         type='text'
//         placeholder={description}
//         onChange={(ev) => setNewDesc(ev.target.value)}
//       />

  

//       <input className='editLocation'
//         type='text'
//         placeholder={location}
//         onChange={(ev) => setNewLocation(ev.target.value)}
//       />

      

//       <input className='editPrice'
//         type='text'
//         placeholder={price}
//         onChange={(ev) => setNewPrice(ev.target.value)}
//       />

      

//       <input className='newWillDeliver'
//         type='checkbox'
//         checked={newWillDeliver}
//         onChange={(ev) => setNewWillDeliver(ev.target.checked)}
//       />
//       <button type='submit'>Create Post</button>
//       <button type="submit" onClick={() =>{ 
//       createPost(token);
//       }}>       
//       Create a Post</button>
//     </form>
//   )
// }

// export default CreatePost;


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

