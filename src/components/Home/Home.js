import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Header from '../Header/Header';
import Post from '../Post/Post'
import SideBar from '../SideBar/SideBar';
import './home.css'

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
          <div className="post-sidebar">
            <div className="sidebars">
              <SideBar></SideBar>
            </div>
            <div className='posts'>
              {
                post.map(post => <Post post={post}></Post>)
              }
            </div>
            
          </div>
        </div>
    );
};

export default Home;