import React, { useState, useEffect } from 'react';

const Donetionlist = () => {
  const [donetion, setDonetion] = useState([]);

  useEffect(() => {
    fetch("../../public/Data.json")
      .then((res) => res.json())
      .then((data) => {
        setDonetion(data); // Store fetched data in state
        console.log(data); // Log the fetched data to see its structure
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  // Example of how to access data from the 'donetion' state
  // Assume 'data.json' contains an array of objects, each with an 'id' property
  const firstDonetionId = donetion.length > 0 ? donetion[0].id : '';

  return (
    <div>
      <h1>Data Length: {donetion.length}</h1>
      <p>First Donation ID: {firstDonetionId.id}</p>
    </div>
  );
};

export default Donetionlist;
