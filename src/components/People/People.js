import { Avatar } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
// import { Profiler } from 'react';
import { useHistory } from 'react-router';
import './people.css'

const People = () => {
    const [people,setPeople] = useState([]);
    useEffect(()=>{
        const url = 'https://jsonplaceholder.typicode.com/users/';
        fetch(url).then(res=>res.json()).then(data=>setPeople(data))
    },[])
    const history = useHistory();
    const handleProfile = (id)=>{
        history.push(`/profile/${id}`)
    }
    return (
        <div className='peoples'>
            {
                people.map(people=>{

                    return (
                        
                            <div className='text-center m-2 p-3 border-dark  rounded shadow sticky people'>
                                <span className=' d-flex justify-content-center'><Avatar src="/broken-image.jpg"/></span>
                                <h5>{people.name}</h5>
                                <button onClick = {()=>handleProfile(people.id)} className='btn btn-info'>View Profile</button>
                            </div>
                        
                    )
                })
            }
        </div>
    );
};

export default People;