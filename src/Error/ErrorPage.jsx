// import React from 'react';

import { NavLink } from "react-router-dom";

// import { Link, NavLink } from "react-router-dom";

// import { NavLink } from "react-router-do?m";

const ErrorPage = () => {
 
    const Error=<>
    <NavLink to={"/"}>Go Back</NavLink>
    </>
    
    return (
        <div className="mt-40">
            <h1 className="text-center text-5xl font-bold ">Opps!</h1>
           <div className="text-center ">
           <button  className="btn btn-primary mt-10">{Error}</button>
           </div>
        </div>
    );
};

export default ErrorPage;


