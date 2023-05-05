import { useState } from 'react'
import {BrowserRouter , Route , Routes } from 'react-router-dom'
import Home from './Home'
import './App.css'
import SignIn from './SignIn'
// const [problemslist , setProblemlist ] = useState()

// const problemslist2 = [{ ...}]   -- > this is wrong way react will not care if the content in this array changes 


function App() {


  return (
    <>
    <div>

      <BrowserRouter>
        <Routes>
          <Route path="/" exact element = {<SignIn/>}/>
          <Route path="/Home" exact element = {<Home/>} />
          {/* <Redirect to="/Home" /> */}
        </Routes>
      
      </BrowserRouter>

   </div>
    </>
  )
}


export default App


/*

      <div>
       
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
*/