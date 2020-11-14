import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {

 
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]


  const total = <p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
  const course = 'Half Stack application development'

  return (
    <div>
      <Header course={course} />
      <Content parts={parts}/>
      <Total total={total} />
    </div>
  )
}

const Header = (props) => {
  return (
    <div>
      <p>
       {props.course}
      </p>
    </div>
  )
}

const Content = (props) => {
 
  return (
    <div>
      <Part part={props.parts[0].name}exercise={props.parts[0].exercises}/>
      <Part part={props.parts[1].name}exercise={props.parts[1].exercises}/>
      <Part part={props.parts[2].name}exercise={props.parts[2].exercises}/>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
        {props.total}
    </div>
    )
}

const Part = (props) => {
  console.log(props);
  return (
    <div>
      <p>
        {props.part} {props.exercise}
      </p>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))