import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Header from '../Header/Header';
import Post from '../Post/Post'
import SideBar from '../SideBar/SideBar';

const Home = () => {
    const [post,setPost] = useState ([])
  useEffect (()=>{
    const url ='https://jsonplaceholder.typicode.com/posts';
      fetch(url)
      .then( res => res.json())
      .then(data => setPost(data))
  },[]);
    return (
        <div className= ""> 
          <Header></Header>
          <div className="d-flex">
            <div className='col-9'>
              {
                post.map(post => <Post post={post}></Post>)
              }
            </div>
            <div className="col-3">
              <SideBar></SideBar>
            </div>
          </div>
        </div>
    );
};

export default Home;