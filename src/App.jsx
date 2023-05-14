import { useState } from 'react'
import {BrowserRouter , Route , Routes } from 'react-router-dom'
import Home from './Home'
import './App.css'
import SignIn from './SignIn'
import FullProblem from './FullProblem'
import Footer from './Footer'
// const [problemslist , setProblemlist ] = useState()

// const problemslist2 = [{ ...}]   -- > this is wrong way react will not care if the content in this array changes 


function App() {


  return (
    <>
    <div className='app'>

      <BrowserRouter>
        <Routes>
          <Route path="/" exact element = {<SignIn/>}/>
          <Route path="/Home" exact element = {<Home/>} />
          <Route path='/FullProblem/:title' exact element={<FullProblem/>}/>
        </Routes>
      
      </BrowserRouter>

    <Footer/>

   </div>
    </>
  )
}


export default App

