import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {

 
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const total = <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
  const course = 'Half Stack application development'
  const content =  <div><p>
  {part1} {exercises1}
</p>
<p>
  {part2} {exercises2}
</p>
<p>
  {part3} {exercises3}
</p>
</div>

  return (
    <div>
      <Header course={course} />
      <Content content={content}/>
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
  console.log(props)
  return (
      props.content
  )
}

const Total = (props) => {
  return (
    <div>
        {props.total}
    </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))