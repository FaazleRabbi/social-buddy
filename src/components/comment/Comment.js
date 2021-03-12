import React, { useEffect, useState } from 'react';


const Comment = (props) => {
    const postId = props.postId;
    const [comment,setComment]= useState([]);
    useEffect (()=>{
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setComment(data))
    },[postId])
    return (
        <div>
            {
                comment.map(comment=>{
                    const {name,body}=comment;
                    return (
                        <div className='mt-2 shadow p-2'>
                            <h6>{name}</h6>
                            <hr/>
                            <p>{body}</p>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Comment;