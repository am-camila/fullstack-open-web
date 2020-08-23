import React from 'react'
import ReactDOM from 'react-dom'


const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (content) => { 
  return (
    <p>
      {content.content.part} {content.content.exercises}
    </p>
  )
}

const Content = (props) => {
 
  return (   
    <div>
      <Part content = {props.content[0]}/>
      <Part content = {props.content[1]}/>
      <Part content = {props.content[2]}/>
    </div>
  )
}

const Total = (props) => {
  var total = 0;
      props.exercises.forEach(content => {
      total = content.exercises + total
    });
  

  return (
    <div>
      <p> Number of exercises {total}</p>
    </div>
    
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const content = [
    {part: part1, exercises: exercises1}, 
      {part: part2, exercises: exercises2},
        {part: part3, exercises: exercises3}]

   return (
    <div>
      <Header course = {course}/>
      <Content content = {content}/> 
      <Total exercises = {content}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))