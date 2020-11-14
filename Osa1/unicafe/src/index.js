import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Statistics = (props) => {
  if(props.all <= 0) {
    return(
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
  return (

      <table>
        <tbody>
        <tr>
          <td><StatisticLine text="good" value ={props.good} /></td>
        </tr>
        <tr>
          <td><StatisticLine text="neutral" value ={props.neutral} /></td>
        </tr>
        <tr>
          <td><StatisticLine text="bad" value ={props.bad} /></td>
        </tr>
        <tr>
          <td><StatisticLine text="all" value ={props.all} /></td>
        </tr>
        <tr>
          <td>Avarage </td><td>{((props.good-props.bad)/(props.all)).toFixed(1)}</td>
        </tr>
        <tr>
          <td>Positive</td><td> {(props.good/props.all*100).toFixed(1)}%</td>
        </tr>
        </tbody>
     </table>
  
  )
}

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const StatisticLine = (props) => {
   return(
    <div>
      <p>{props.text} {props.value}</p>
    </div>
    )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  
  
  const goodHandler = () => {
      setGood(good + 1)  
      setAll(all + 1) 
  }

  const neutralHandler = () => {
      setNeutral(neutral + 1)
      setAll(all + 1) 
  }

  const badHandler = () => {
      setBad(bad + 1) 
      setAll(all + 1) 
  }

  return (
    <div>
      <header>
        <h1>give feedback</h1>
      </header> 
      <Button text="good" handleClick={goodHandler}/>
      <Button text="neutral" handleClick={neutralHandler}/>
      <Button text="bad" handleClick={badHandler}/>
      <header>
        <h1>statistics</h1>
      </header>
      <Statistics 
      good={good}
      neutral={neutral}
      bad={bad}
      all={all}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
