
import { useEffect, useState } from 'react';
import './App.css'

function App() {
 const [starwars, setStarwars] = useState(null) 
  useEffect(( )=> {
    getStarwars()
  },[])

  // Function to get movies
  const getStarwars = async (searchTerm) => {
    // Make fetch request and store the response
    const response = await fetch(
      `https://swapi.dev/api/people/1/`
    );
    // Parse JSON response into a JavaScript object
    const data = await response.json();
    // Set the Movie state to the received data
    setStarwars(data);
  };
  console.log(starwars)

  return (
    <>
{/* <StarwarsDisplay data={data} /> */}
    </>
  )
}

export default App
