
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { updatePost, deletePost } from '../api';


const EditPost = ({ posts, token }) => {
  const { postID } = useParams();
  
  const [currentPost] = posts.filter(post => post._id === postID);
  
  const {title, description, location, price, willDeliver} = currentPost;
  
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDesc] = useState(description);
  const [newLocation, setNewLocation] = useState(location);
  const [newPrice, setNewPrice] = useState(price);
  const [newWillDeliver, setNewWillDeliver] = useState(willDeliver);
  
  async function editPost() {
    const updatedPost = {
      token: token,
      title: newTitle,
      description: newDescription,
      location: newLocation,
      price: newPrice,
      willDeliver: newWillDeliver,
      _id: postID
    }
    await updatePost(updatedPost)
  }
  
  async function handleDelete() {
    await deletePost(token, currentPost._id);
    fetchPosts();
    alert('Your post was successfully deleted!')
    navigate('/posts')
  }
  
  return (
    <form className='editForm' onSubmit={ (ev) => {
      ev.preventDefault();
      editPost();
      
    }}>
      <input className='editTitle'
        type='text'
        placeholder={title}
        onChange={(ev) => setNewTitle(ev.target.value)}
      />
    
     

      <input className='editDescription'
        type='text'
        placeholder={description}
        onChange={(ev) => setNewDesc(ev.target.value)}
      />

  

      <input className='editLocation'
        type='text'
        placeholder={location}
        onChange={(ev) => setNewLocation(ev.target.value)}
      />

      

      <input className='editPrice'
        type='text'
        placeholder={price}
        onChange={(ev) => setNewPrice(ev.target.value)}
      />

      

      <input className='newWillDeliver'
        type='text'
        checked={newWillDeliver}
        onChange={(ev) => setNewWillDeliver(ev.target.checked)}
      />
  

      <button onClick={() => {
              deletePost(token, postID);
            }}
         >Delete</button>
              
    </form>
  )
}

export default EditPost;