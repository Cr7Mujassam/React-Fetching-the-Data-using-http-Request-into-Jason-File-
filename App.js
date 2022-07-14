import './App.css';
import React, {useRef,useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  
  const [person,setperson] = useState('');
  const [height,setheight] = useState('');

  function fetchMovieHandler(){
    fetch('https://swapi.py4e.com/api/people/1/').then(response =>{
      return response.json();
    }).then(data =>{
      console.log(data.name);
      setperson(data.name);
      setheight(data.height);
    })
  }


  return(
    <div>
      <button onClick={fetchMovieHandler}>FetchMovie</button>
      <p>{person} and your heigth is {height}</p>
    </div>
  );
}
export default App;
