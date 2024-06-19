// import React from 'react';

const Banner = () => {
  return (
    <>
    <div >
    <div className="hero min-h-screen bg-white text-black"  style={{backgroundImage: 'url(https://ibb.co/vZZrKBV)'}}>
     <div className="text-black  "></div>
  <div className="hero-content text-center ">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">I Grow By Helping People In Need</h1>
   
      <div className="flex items-baseline  justify-center">
        <div><input className="input input-bordered w-full max-w-xs  bg-white" type="text" placeholder="Search here...." /></div>
     <div>
     <button className="btn btn-primary ">Search</button>
     </div>
      </div>
    </div>
  </div>
     </div>
    </div>
    </>
  );
};

export default Banner;
