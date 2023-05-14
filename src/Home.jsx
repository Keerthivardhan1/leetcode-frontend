import React from 'react'
import { useState } from 'react'
import ReactDOM from 'react-dom';
import "./index.css"
import NewProblem from './NewProblem'
import { Link } from 'react-router-dom';
import FullProblem from './FullProblem';
import {  Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg'

const p2 = [ 
    {  
      qid : 2619,
      title : "2619. Array Prototype Last",
      accptence : "59.4%",
      difficulty : "Medium"
    },
    { 
      qid : 2618,
      title : "2618. Check if Object Instance of Class",
      accptence : "60.4%",
      difficulty : "easy"
    },
    { 
      qid : 2622,
      title : "2622. Cache With Time Limit",
      accptence : "39.4%",
      difficulty : "Medium"
    },
    { 
      qid:1456,
      title : "1456. Maximum Number of Vowels in a Substring",
      accptence : "59.4%",
      difficulty : "hard"
    },
    { 
      qid:1457,
      title : "1457. Maximum Number of Vowels in a Substring",
      accptence : "59.4%",
      difficulty : "Medium"
    },
    { 
      qid:1458,
      title : "1458. Maximum Number of Vowels in a Substring",
      accptence : "59.4%",
      difficulty : "Medium"
    },
  ]
  
  const p1 = [
  
    { 
      qid:1459,
      title : "1459. Maximum Number of Vowels in a Substring",
      accptence : "59.4%",
      difficulty : "Medium"
    },
    { 
      qid:2619,
      title : "2619. Check if Object Instance of Class",
      accptence : "60.4%",
      difficulty : "easy"
    },
    { 
      qid:2620,
      title : "2620. Array Prototype Last",
      accptence : "39.4%",
      difficulty : "Medium"
    },
    { 
      qid:2625,
      title : "2625. Cache With Time Limit",
      accptence : "59.4%",
      difficulty : "hard"
    },
    { 
      qid:1466,
      title : "1466. Maximum Number of Vowels in a Substring",
      accptence : "59.4%",
      difficulty : "Medium"
    },
    { 
      qid:1467,
      title : "1467. Maximum Number of Vowels in a Substring",
      accptence : "59.4%",
      difficulty : "Medium"
    },
  
  ]
  


  
  
  // const [problemslist , setProblemlist ] = useState()
  
  // const problemslist2 = [{ ...}]   -- > this is wrong way react will not care if the content in this array changes 
  
  

const Home = () => {
    
    const [problemslist , setProblemlist] = useState([])

    const [showpopup , setshowpopup] = useState(false)

    const openpopup  = ()=>{
      setshowpopup(true);
    }

    const closepopup = ()=>{
      setshowpopup(false)
    }

    const handleProblemSubmit = (problem)=>{
      if (!problem.title || !problem.accptence || !problem.difficulty) {
        alert("Please fill out all fields");
        return;
      }
      console.log("-------handeleing the problem  submit --> pushed to p2  --------")
      p2.push(problem)
    }

return (
  < >

    <div className='home'>
          
      <Routes>
        {/* <Route path="/" exact element={<Homepage/>} /> */}
        <Route path="/FullProblem" exact element={<FullProblem/>} />
      </Routes>

      <div className='icon'>
          <img src={reactLogo} className="logo react" alt="React logo" />
        
      </div>


  <div>
    <h1>Happy Coding</h1>
  </div>
  <button onClick={()=>setshowpopup(true)}  >Add Problem</button>
  {showpopup && <NewProblem closepopup = {closepopup} problemSubmit = {handleProblemSubmit}/>}

  <div>
    <button  onClick={() => setProblemlist(p1)}>1</button>
    <button  onClick={() => setProblemlist(p2)}>2</button>
  </div>
  
  <table>
  <tbody className='problemsList'>
    {
      problemslist.map((problem, index) => 
      <Problems 
        key = {index}
        problem = {problem}
      />
      )
    }
    
  </tbody>

  </table>

    </div>



  </>
  )
}


function Problems(props) {
    const title = props.problem.title
    const accptence = props.problem.accptence
    const difficulty = props.problem.difficulty

    // console.log(pro)

    // const problem2 = {
    //   titlee:{title},
    //   accptencee: {accptence},
    //   difficultye: {difficulty}
    // }

    // console.log("problem 2 is --" , problem2);
  
    return(
     
        <tr className='problem'>
          <td>
          <Link to={{
            pathname: `/FullProblem/${title}`
          }}> {title}</Link>
          </td>
          <td>
            {accptence}
          </td>
          <td>
            {difficulty}
          </td>
        </tr>
        
    ) 
  }

  // function Popup() {
  //   return ReactDOM.createPortal(
  //     <NewProblem/>
  //   );
  // }

export default Home