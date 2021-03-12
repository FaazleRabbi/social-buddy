import { Avatar } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Profile = () => {
    const {id}=useParams();
    const [profile, setProfile] = useState({});
    useEffect(()=>{
        const url =`https://jsonplaceholder.typicode.com/users/${id}`
        fetch(url).then(res=>res.json()).then(data =>setProfile(data))
    },[id])
    const {name,email,phone,website } = profile;
    // const {bs,catchPhrase} = profile?.company ;
    // const {street,suite,city,zipcode,} =profile?.address;
    return (
        <div className='d-flex justify-content-center m-5 p-3'>
            <div className=' '>
                {/* {console.log(profile)} */}
                <span className="d-flex justify-content-center"><Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" /></span>
                <h1 className="text-danger"> {name} </h1>
                <h4>email: {email}</h4>
                <h5>Phone:{phone}</h5>
                <h5>Website: {website}</h5>
                <div>
                    <div>
                        <h5>Company</h5>
                        <p>Name :{profile.company?.name}</p>
                        <p>BS:{profile.company?.bs}</p>
                        <p>{profile.company?.catchPhrase}</p>
                    </div>
                    <div>
                        <h5>Address</h5>
                        <p>Street :{profile.address?.street}</p>
                        <p>Suite :{profile.address?.suite}</p>
                        <p>City :{profile.address?.city}</p>
                        <p>Zipcode :{profile.address?.zipcode}</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;