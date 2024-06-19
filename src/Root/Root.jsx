// import React from 'react';

import { Outlet } from "react-router-dom";
import Navber from "../Navber/Navber";
import Footer from "../Footer/Footer";
import Button from "../Button/Buttonbtn";




const Root = () => {
    return (
        <div>
            {/* <h1>this is home page </h1> */}
            <Navber></Navber>
            <Outlet to='/'></Outlet>
        <Button></Button>
            <Footer></Footer>
        </div>
    );
};

export default Root;