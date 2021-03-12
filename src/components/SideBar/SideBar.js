import React from 'react';
import People from '../People/People';
import './sidebar.css'

const SideBar = () => {
    return (
            <div className="sideBar">
              <h2>People</h2>
              <div className="peopleCard">
                <People></People>
              </div>
            </div>
    );
};

export default SideBar;