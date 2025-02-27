import { useState, useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import {Details} from './Details.jsx'
import {Home} from './Home.jsx'
import UsersContext from './UsersContext';
import DetailsContext from './DetailsContext';


function App() {
  const [users, setUsers] = useState([])
  const [details, setDetails] = useState({title: '', name: '', address: ''})
  const detailValue = {details, setDetails};

  useEffect(()=>{
    fetch('https://randomuser.me/api/?results=5')
    .then(results => results.json())
    .then(data => setUsers(data.results))
  }, [])

  return (
    <>
      <UsersContext.Provider value={users}>
        <DetailsContext.Provider value={detailValue}>
          <h2>Home Address Locator</h2>
          <p>(Simulated and random so it's not doxing, don't worry)</p>
          <Link to='/'>Home</Link>
          <br></br>
          <Link to='/details'>Details</Link>
          <br></br>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/details" element={<Details />}/>
            <Route path="/details/:username" element={<Details />}/>
          </Routes>
        </DetailsContext.Provider>
      </UsersContext.Provider>
    </>
  )}

export default App