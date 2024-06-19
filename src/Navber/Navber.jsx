// import React from 'react';

import { NavLink } from "react-router-dom";

// import { Link } from "react-router-dom";

const Navber = () => {
    const home=<>
    <NavLink to="/">Home</NavLink>
    </>
    const Donation=<>
    <NavLink to='/'><h1><img className="w-24 object-cover " src="../../public/Resources/Logo.png" alt="" /></h1></NavLink>
    </>
    const donation=<>
    <NavLink to="/donation">Donation</NavLink>
    </>
    const statistics=<>
    <NavLink to="/statistics">Statistics</NavLink>
    </>
   
    return (
        <div className="navbar bg-white text-black">
        <div className="flex-1">
          <li className="list-none"><a href="#">{Donation}</a></li>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li><a href="#">{home}</a></li>
            <li><a href="#">{donation}</a></li>
            <li><a href="#">{statistics}</a></li>
          </ul>
        </div>
      </div>
    );
};

export default Navber;