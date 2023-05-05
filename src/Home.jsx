import React from 'react'
import { useState } from 'react'
import "./index.css"

const p2 = [ 
    {
      title : "2619. Array Prototype Last",
      accptence : "59.4%",
      difficulty : "Medium"
    },
    {
      title : "2618. Check if Object Instance of Class",
      accptence : "60.4%",
      difficulty : "easy"
    },
    {
      title : "2622. Cache With Time Limit",
      accptence : "39.4%",
      difficulty : "Medium"
    },
    {
      title : "1456. Maximum Number of Vowels in a Substring",
      accptence : "59.4%",
      difficulty : "hard"
    },
    {
      title : "1456. Maximum Number of Vowels in a Substring",
      accptence : "59.4%",
      difficulty : "Medium"
    },
    {
      title : "1456. Maximum Number of Vowels in a Substring",
      accptence : "59.4%",
      difficulty : "Medium"
    },
  ]
  
  const p1 = [
  
    {
      title : "1456. Maximum Number of Vowels in a Substring",
      accptence : "59.4%",
      difficulty : "Medium"
    },
    {
      title : "2618. Check if Object Instance of Class",
      accptence : "60.4%",
      difficulty : "easy"
    },
    {
      title : "2619. Array Prototype Last",
      accptence : "39.4%",
      difficulty : "Medium"
    },
    {
      title : "2622. Cache With Time Limit",
      accptence : "59.4%",
      difficulty : "hard"
    },
    {
      title : "1456. Maximum Number of Vowels in a Substring",
      accptence : "59.4%",
      difficulty : "Medium"
    },
    {
      title : "1456. Maximum Number of Vowels in a Substring",
      accptence : "59.4%",
      difficulty : "Medium"
    },
  
  ]
  
  
  
  // const [problemslist , setProblemlist ] = useState()
  
  // const problemslist2 = [{ ...}]   -- > this is wrong way react will not care if the content in this array changes 
  
  

const Home = () => {
    
    const [problemslist , setProblemlist] = useState([])


return (
  <>
  <div>

    <h1>Home</h1>
  </div>

  <div>
    <button  onClick={() => setProblemlist(p1)}>1</button>
    <button  onClick={() => setProblemlist(p2)}>2</button>
  </div>

  <div className='problemsList'>
    {
      problemslist.map((problem, index) => 
      <Problems 
        title = {problem.title}
        accptence = {problem.accptence}
        difficulty = {problem.difficulty}   
      />
      )
        
    }
  </div>

  </>
  )
}


function Problems(props) {
    const title = props.title
    const accptence = props.accptence
    const difficulty = props.difficulty
  
    return(
      <div >
        <tr className='problem'>
          <td>
            {title}
          </td>
          <td>
            {accptence}
          </td>
          <td>
            {difficulty}
          </td>
        </tr>
      </div>
    ) 
  }

export default Home