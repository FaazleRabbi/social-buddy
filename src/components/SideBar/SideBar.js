import React from 'react';
import People from '../People/People';

const SideBar = () => {
    return (
        <div>
            <div className="sideBar">
              <h2>People</h2>
              <div className="peopleCard">
                <People></People>
              </div>
            </div>
        </div>
    );
};

export default SideBar;