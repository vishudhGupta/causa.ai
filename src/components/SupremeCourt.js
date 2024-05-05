import React, {useState,useEffect} from 'react'
import './CssFiles/SupremeCourt.css'
const SupremeCourt = () => {
    const [courts, setCourts] = useState([]);

    useEffect(() => {
      const fetchCourts = async () => {
        try {
          const response = await fetch('https://phoenix.akshit.me/high-court/courts', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ key: 'value' }) // replace with your data
          });
          console.log("response",response);
          const data = await response.json();
          
          setCourts(data.courts);
        } catch (error) {
          console.error('Error:', error);
        }
      };
  
      fetchCourts();
    }, []);
  
    return (
      <>
      <div className='courtContainer'>
        <h1 className='courtHeading'>List of HighCourts in India</h1>
        <div className="tableContent">
        <table>
            <thead>
                <th>S.no</th>
                <th>Name of Courts</th>
            </thead>
        {courts.map((court, index) => (
            <tbody key = {index}>
                <td>{index+1}</td>
                <td>{court.name}</td>
            </tbody>
          ))}
          </table>
          </div>
      </div>
      </>
    );
  };

export default SupremeCourt