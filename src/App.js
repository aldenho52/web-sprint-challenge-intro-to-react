import React, {useState, useEffect} from 'react';
import axios from 'axios'
import './App.css';
import Character from './components/Character'

const App = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get(`https://swapi.py4e.com/api/people`)
      .then(res => {
        // console.log(res)
        setData(res.data.results)
      })
      .catch(err => {
        console.log(err)
      })

  }, [])

  const expandDetails = () => {
    // ExtraDetails.classList.toggl(this.className)
  }

  return (
    <div className="App">
      <h1 className="Header">Star Wars Characters</h1>
      {
        data.map(obj => {
          return <Character data={obj} expandDetails={expandDetails}/>
        })
      }
    </div>
  );
}

export default App;
