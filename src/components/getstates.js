import React, { useEffect, useState } from 'react';

const GetStates = () => {
  const [states, setStates] = useState([]);

  useEffect(() => {
    const fetchStates = async () => {
      try {
        const response = await fetch('https://phoenix.akshit.me/district-court/states', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ key: 'value' }) // replace with your data
        });
        const data = await response.json();
        console.log(data);
        setStates(data.states);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchStates();
  }, []);

  return (
    <>
    <div>
      <h1>States:</h1>
      {states.map((state, index) => (
        <div key = {index}>
            <p>ID {state.id}</p>
            <p>{state.name}</p>
            </div>
        ))}
    </div>
    </>
  );
};

export default GetStates;