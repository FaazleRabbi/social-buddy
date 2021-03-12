import React, { useEffect, useState } from 'react';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import { Avatar } from '@material-ui/core';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import ShareIcon from '@material-ui/icons/Share';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Comment from '../comment/Comment';

const Post = (props) => {
  const {title,body,userId,id}= props.post;
  const [user,setUser] = useState([]);
  useEffect(()=>{
    const url =  `https://jsonplaceholder.typicode.com/users/${userId}`
    fetch(url)
    .then(res=>res.json())
    .then(data =>setUser(data) )
  },[userId])
  


  return (
    <div className=' rounded shadow mt-3 mb-3'>
      <div classNameName="card border-light ">
        <div className="card-header bg-transparent border-light d-flex">
          {/* <img className='mr-2' style={{height:'50px',width:'50px',borderRadius:'50px'}} src= alt=""/> */}
          <Avatar className='mr-2' src="/broken-image.jpg" />
          <h5 className='pt-2'>{user.name}</h5>
        </div>
        <div className="card-body text-dark">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{body} </p>
        </div>
        <div className="card-footer bg-transparent border-light d-flex">
          <h5 className='col-4 text-center'><ThumbUpAltIcon></ThumbUpAltIcon> Like</h5>
          <h6 className='col-4 text-center'><ChatBubbleIcon></ChatBubbleIcon>
            <Popup trigger={<button style={{border:'none',backgroundColor:"none"}} className="button "> Comment </button>} modal>
              <div><Comment postId={id}></Comment> </div>
            </Popup></h6>
          <h6 className='col-4 text-center'><ShareIcon></ShareIcon> Share</h6>
        </div>
      </div>
    </div>
  );
};

export default Post;