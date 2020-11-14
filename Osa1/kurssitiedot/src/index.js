import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {

 
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }


  const total = <p>Number of exercises {part1.exercises + part2.exercises + part3.exercises}</p>
  const course = 'Half Stack application development'

  return (
    <div>
      <Header course={course} />
      <Content 
      part1={part1.name}
      part2={part2.name}
      part3={part3.name}
      exercises1={part1.exercises}
      exercises2={part2.exercises}
      exercises3={part3.exercises}
      />
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
      <Part part={props.part1}exercise={props.exercises1}/>
      <Part part={props.part2}exercise={props.exercises2}/>
      <Part part={props.part3}exercise={props.exercises3}/>
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